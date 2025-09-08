"use client";

import Link from "next/link";
import { useTranslations } from "./I18nContext";

export default function Clients() {
  const dict = useTranslations();

  const clients = [
    {
      name: dict("digirise.name"),
      description: dict("digirise.description"),
      link: "https://digirise.ai/business/reskilling/ai-works",
    },
    {
      name: dict("exaWizards.name"),
      description: dict("exaWizards.description"),
      link: "https://exawizards.com",
    },
    {
      name: dict("bbSakura.name"),
      description: dict("bbSakura.description"),
      link: "https://www.bbsakura.net",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 space-y-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        {dict("pastClients")}
      </h2>
      <div className="flex flex-col space-y-8">
        {clients.map((client, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {client.name ?? dict("confidentialClient")}
              </h3>
              <p className="text-gray-600">{client.description}</p>
            </div>
            <div className="mt-4">
              <Link
                href={client.link}
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                {dict("visitWebsite")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
