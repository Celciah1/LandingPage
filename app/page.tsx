// src/app/page.tsx

import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const features = [
    {
      title: "Responsive Design",
      description: "Looks amazing on all devices, from phones to desktops.",
      icon: "📱",
    },
    {
      title: "Fast Performance",
      description: "Optimized for speed using Next.js and modern tools.",
      icon: "⚡",
    },
    {
      title: "Accessibility First",
      description: "Built with semantic HTML and full keyboard navigation support.",
      icon: "♿",
    },
  ];

  return (
    <>
      <Head>
        <title>Landing Page | Build Better Experiences</title>
        <meta name="description" content="A blazing fast and accessible landing page built with Next.js and Tailwind CSS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section
          aria-labelledby="hero-heading"
          className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-12"
        >
          <div className="flex-1">
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            >
              Build Better Experiences
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-600 max-w-prose">
              Launch faster. Convert better. Delight users. A perfect solution for modern web needs.
            </p>
            <a
              href="#get-started"
              className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-xl hover:bg-blue-700 focus-visible:outline focus-visible:ring-4 focus-visible:ring-blue-300 transition"
            >
              Get Started
            </a>
          </div>

         
        </section>

        {/* Features */}
        <section
          aria-labelledby="features-heading"
          className="px-6 md:px-20 py-16 bg-gray-50"
        >
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <article
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
                role="region"
                aria-labelledby={`feature-${idx}`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3
                  id={`feature-${idx}`}
                  className="text-xl font-semibold mb-2"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section
          id="get-started"
          aria-labelledby="cta-heading"
          className="px-6 md:px-20 py-16 text-center bg-blue-600 text-white"
        >
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg max-w-xl mx-auto">
            Sign up today and build something incredible with our tools and support.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-xl hover:bg-gray-100 focus-visible:outline focus-visible:ring-4 focus-visible:ring-white transition"
          >
            Create an Account
          </a>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 md:px-20 bg-gray-100 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} My Landing Page. All rights reserved.
        </footer>
      </main>
    </>
  );
}
