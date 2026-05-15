import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="bg-green-800 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            About Urbonix
          </h1>

          <p className="mt-8 text-lg leading-8 text-green-100">
            Urbonix is a modern lifestyle ecosystem focused on
            building technology-driven solutions for green living,
            wellness, and local commerce.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800">
            Our Mission
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Our mission is to simplify modern lifestyles through
            smart digital platforms that connect users with trusted
            local services, sustainable products, and wellness
            experiences.
          </p>

          <h2 className="mt-20 text-4xl font-bold text-green-800">
            Our Vision
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            We envision a future where technology and sustainability
            work together to create healthier homes, smarter cities,
            and better everyday experiences.
          </p>

          <h2 className="mt-20 text-4xl font-bold text-green-800">
            What We Build
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {[
              "Green Lifestyle Platforms",
              "Gardening Services",
              "Wellness Subscriptions",
              "Local Commerce Solutions",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-50 p-8 rounded-3xl border border-green-100"
              >
                <h3 className="text-2xl font-semibold text-green-700">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}