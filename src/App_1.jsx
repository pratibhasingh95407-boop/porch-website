export default function PorchLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-16 lg:px-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-green-800">
              Bring Nature Closer to Your Home with Porch
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Porch is your complete green living companion that connects you with nearby nurseries,
              gardening experts, and healthy lifestyle services — all in one seamless platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl shadow-lg transition">
                Download App
              </button>

              <button className="border border-green-700 text-green-700 hover:bg-green-100 px-6 py-3 rounded-2xl transition">
                Explore Services
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
              <img
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop"
                alt="Plants"
                className="rounded-2xl w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 md:px-16 lg:px-28 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800">
            Everything You Need for a Greener Lifestyle
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Porch helps users discover and shop from nearby nurseries offering a wide variety of plants,
            pots, gardening accessories, and home décor essentials. Whether you are looking for indoor
            greenery, outdoor plants, or stylish planters, Porch makes it easy to explore trusted local
            nurseries and order online with convenience.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Beyond shopping, Porch also provides professional gardening assistance where experienced
            gardeners can visit your home and help maintain, repot, prune, and care for your plants.
            The platform also includes a healthy juice subscription service delivering fresh juices every
            morning to support healthier lifestyles.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 md:px-16 lg:px-28 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-green-800">
              Why Choose Porch?
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Designed to simplify plant care, shopping, and wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Nearby Nurseries',
                desc: 'Discover trusted local nurseries and explore plants, pots, and accessories nearby.',
              },
              {
                title: 'Online Ordering',
                desc: 'Buy plants and gardening essentials easily through a smooth online experience.',
              },
              {
                title: 'Gardening Services',
                desc: 'Book professional gardeners for home visits and expert plant care assistance.',
              },
              {
                title: 'Fresh Juice Delivery',
                desc: 'Subscribe to healthy morning juices delivered fresh to your doorstep daily.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg border border-green-100 hover:-translate-y-1 transition"
              >
                <h3 className="text-2xl font-semibold text-green-700">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20 md:px-16 lg:px-28 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800">
            Our Mission
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Porch is committed to creating a reliable, user-friendly, and secure platform that supports
            greener homes, healthier habits, and stronger local communities. Our goal is to make plant
            shopping and care more accessible while helping users embrace a more sustainable lifestyle.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-16 lg:px-28">
        <div className="max-w-5xl mx-auto bg-green-800 rounded-[32px] p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white">
            Start Your Green Journey Today
          </h2>

          <p className="mt-6 text-green-100 text-lg leading-8 max-w-3xl mx-auto">
            Download Porch and discover plants, gardening services, and healthy lifestyle solutions
            designed to make everyday living fresher and greener.
          </p>

          <button className="mt-8 bg-white text-green-800 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-100 py-8 text-center text-gray-500 bg-white">
        <p>
          © 2026 Porch. All rights reserved.
        </p>
      </footer>
    </div>
  );
}