import { match } from "@formatjs/intl-localematcher";
import Negotiator, { Headers } from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const languages = ["en", "ja", "fr"];
const defaultLanguage = "en";

function getLanguage(request: NextRequest) {
  const headers = request.headers;
  const negotiatorHeaders: Headers = {};
  for (const [key, value] of headers.entries()) negotiatorHeaders[key] = value;
  let reqLanguages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // Remove wildcards like "*"
  reqLanguages = reqLanguages.filter((lang: string) => lang !== "*");

  // If nothing remains, just use the default
  if (reqLanguages.length === 0) {
    return defaultLanguage;
  }

  return match(reqLanguages, languages, defaultLanguage);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLanguage = languages.some((language) =>
    pathname.startsWith(`/${language}`),
  );

  if (pathnameHasLanguage) return;

  // redirect if there's no language
  const language = getLanguage(request);
  request.nextUrl.pathname = `/${language}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and public files
    "/((?!_next|api|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|json|txt|xml)).*)",
  ],
};
