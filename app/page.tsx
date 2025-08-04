import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Build Better Experiences
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600">
            Launch faster. Convert better. Delight users. A perfect solution for modern web needs.
          </p>
          <a
            href="#get-started"
            className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          >
            Get Started
          </a>
        </div>

        
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="get-started"
        className="px-6 md:px-20 py-16 text-center bg-blue-600 text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="mb-8 text-lg">
          Sign up today and build something incredible.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-xl hover:bg-gray-100 transition"
        >
          Create an Account
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-20 bg-gray-100 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} My Landing Page. All rights reserved.
      </footer>
    </main>
  );
}
