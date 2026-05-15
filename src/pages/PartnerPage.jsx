import React from "react";

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-green-800 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Partner With Urbonix
          </h1>

          <p className="mt-8 text-lg text-green-100 leading-8">
            Join our growing ecosystem of nurseries, gardeners,
            wellness providers, and local businesses.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Nursery Partners",
                desc: "Sell plants, pots, and gardening products through our platform.",
              },
              {
                title: "Gardening Experts",
                desc: "Offer professional gardening and maintenance services.",
              },
              {
                title: "Wellness Vendors",
                desc: "Provide healthy beverages and wellness subscriptions.",
              },
              {
                title: "Local Businesses",
                desc: "Expand your reach through the Urbonix ecosystem.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-100 p-10 rounded-3xl"
              >
                <h2 className="text-3xl font-bold text-green-800">
                  {item.title}
                </h2>

                <p className="mt-6 text-gray-600 leading-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-green-800 text-white rounded-[36px] p-16 text-center">
            <h2 className="text-4xl font-bold">
              Become a Partner Today
            </h2>

            <p className="mt-6 text-green-100 text-lg">
              Start growing your business with Urbonix.
            </p>

            <button className="mt-10 bg-white text-green-800 px-8 py-4 rounded-2xl font-semibold">
              Contact Partnership Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}