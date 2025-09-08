import Link from "next/link";

export default function Clients() {
  const clients = [
    {
      name: "Digirise",
      description:
        "I redeveloped both the front-end and back-end of the AI-powered B2B chat platform AI Works, set up CI workflows to maintain consistent coding standards across the team, and collaborated with product managers to deliver new features tailored to client needs.",
      link: "https://digirise.ai/business/reskilling/ai-works",
    },
    {
      name: "ExaWizards",
      description:
        "I’ve collaborated with international teams to build and launch AI-powered B2B products, contributing across both front-end and back-end. Beyond feature development, I’ve streamlined deployment pipelines and supported junior developers to ensure smooth and efficient delivery.",
      link: "https://exawizards.com",
    },
    {
      name: "BBSakura Networks",
      description:
        "I led front-end development of a resource management app, redesigned and enhanced a B2B platform with major new features, and implemented end-to-end testing to improve reliability.",
      link: "https://www.bbsakura.net",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Past Clients
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {clients.map((client, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              {client.name ? (
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {client.name}
                </h3>
              ) : (
                <h3 className="text-xl font-semibold text-gray-500 mb-2 italic">
                  Confidential Client
                </h3>
              )}
              <p className="text-gray-600">{client.description}</p>
            </div>
            <div className="mt-4">
              <Link
                href={client.link}
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                Visit Website
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
