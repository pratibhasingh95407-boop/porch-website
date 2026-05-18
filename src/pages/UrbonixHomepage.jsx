import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  Smartphone,
  Truck,
  ShieldCheck,
  Users,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function UrbonixHomepage() {
  const [showPopup, setShowPopup] = useState(false);
  const products = [
    {
      title: "Porch",
      desc: "Your complete green lifestyle platform for plants, gardening services, and wellness.",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Juice+",
      desc: "Fresh healthy juice subscriptions delivered every morning.",
      image:
        "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "GreenCare",
      desc: "Professional gardening and home plant maintenance services.",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const services = [
    {
      icon: <Leaf className="w-8 h-8 text-green-700" />,
      title: "Plant Marketplace",
      desc: "Discover plants, pots, and garden décor from nearby nurseries.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-700" />,
      title: "Gardening Experts",
      desc: "Book professionals for repotting, maintenance, and care.",
    },
    {
      icon: <Truck className="w-8 h-8 text-green-700" />,
      title: "Fast Delivery",
      desc: "Reliable doorstep delivery with live order tracking.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-700" />,
      title: "Secure Platform",
      desc: "Trusted payments and secure user experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-3xl font-bold text-green-800">
            Urbonix
          </div>

         <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
  <Link to="/" className="hover:text-green-700">
    Home
  </Link>

  <Link to="/porch" className="hover:text-green-700">
    Porch
  </Link>

  <Link to="/about" className="hover:text-green-700">
    About
  </Link>

  <Link to="/partner" className="hover:text-green-700">
    Partner
  </Link>

  <Link to="/contact" className="hover:text-green-700">
    Contact
  </Link>

  <Link
    to="/privacy-policy"
    className="hover:text-green-700"
  >
    Privacy
  </Link>
</nav>

          <button 
           onClick={() => setShowPopup(true)}
          className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-2xl shadow-lg transition">
            Download App
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Leaf size={16} />
              Smart Lifestyle Ecosystem
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight text-gray-900">
              Smart Living <br />
              Powered by{" "}
              <span className="text-green-700">Urbonix</span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">
              Discover green living, gardening services,
              wellness subscriptions, and lifestyle experiences —
              all from one seamless digital platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
             <button
  onClick={() => {
    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition flex items-center gap-2"
>
  Explore Products
  <ArrowRight size={18} />
</button>

              <button className="border border-green-700 text-green-700 hover:bg-green-50 px-8 py-4 rounded-2xl font-semibold transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-[40px] shadow-2xl p-6 border border-green-100">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop"
                alt="Urbonix"
                className="rounded-[32px] w-full h-[650px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900">
              Our Products
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Urbonix is building a modern ecosystem of smart
              lifestyle products designed to improve everyday living.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-green-800">
                    {product.title}
                  </h3>

                  <p className="mt-5 text-gray-600 leading-8">
                    {product.desc}
                  </p>

                  <button className="mt-8 text-green-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Coming soon
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-24 px-6 bg-green-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900">
              Services We Offer
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Simplifying lifestyle experiences with technology.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[28px] shadow-lg border border-green-100 hover:-translate-y-2 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-800 font-medium">
              <Smartphone size={18} />
              Mobile Experience
            </div>

            <h2 className="mt-8 text-5xl font-bold text-gray-900 leading-tight">
              Everything You Need <br />
              Inside One App
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Manage orders, subscriptions, services, and lifestyle
              experiences from a beautifully designed mobile platform.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Live order tracking",
                "Secure online payments",
                "Subscription management",
                "Smart product recommendations",
                "Easy service booking",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-green-700" />
                  <span className="text-lg text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-5">
              <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold">
                Google Play
              </button>

              <button className="bg-gray-200 px-8 py-4 rounded-2xl font-semibold">
                App Store
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-b from-green-700 to-green-900 p-6 rounded-[48px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
                alt="Mobile App"
                className="w-[320px] h-[650px] object-cover rounded-[36px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 px-6 bg-green-900 text-white"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold">
            Building The Future of Smart Living
          </h2>

          <p className="mt-10 text-lg leading-9 text-green-100">
            Urbonix is focused on building technology-driven lifestyle
            ecosystems that connect users with wellness, green
            living, local services, and modern commerce through one
            seamless digital experience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-green-700 to-green-900 rounded-[40px] p-16 text-center text-white shadow-2xl">
          <h2 className="text-5xl font-bold">
            Join The Urbonix Ecosystem
          </h2>

          <p className="mt-8 text-lg text-green-100 max-w-3xl mx-auto leading-8">
            Experience a smarter, greener, and healthier lifestyle
            with Urbonix products and services.
          </p>

          <button
  onClick={() => setShowPopup(true)}
  className="mt-10 bg-white text-green-800 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition"
>
  Download The App
</button>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-950 text-gray-300 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-white">
              Urbonix
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Smart lifestyle ecosystem connecting green living,
              wellness, and modern services.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-4">
  <li>
    <Link to="/">Home</Link>
  </li>

  <li>
    <Link to="/porch">Porch</Link>
  </li>

  <li>
    <Link to="/about">About</Link>
  </li>

  <li>
    <Link to="/privacy-policy">
      Privacy Policy
    </Link>
  </li>

  <li>
    <Link to="/terms">
      Terms & Conditions
    </Link>
  </li>
</ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white">
              Products
            </h4>

            <ul className="mt-6 space-y-4">
              <li>Porch</li>
              <li>Juice+</li>
              <li>GreenCare</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white">
              Contact
            </h4>

            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                porch@urbonix.co.in
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +91 7303356994
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                GYC Yamuna Noida, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
          © 2026 Urbonix. All rights reserved.
        </div>
      </footer>
        {/* Download Popup */}
{showPopup && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6">
    <div className="bg-white max-w-md w-full rounded-[32px] p-10 text-center shadow-2xl relative animate-fadeIn">
      
      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-5 right-5 text-gray-400 hover:text-black text-2xl"
      >
        ×
      </button>

      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Smartphone className="text-green-700 w-10 h-10" />
      </div>

      <h2 className="mt-8 text-3xl font-bold text-gray-900">
        App Coming Soon
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        The PORCH mobile application will officially launch within the next month on Google Play Store and App Store.
      </p>

      <p className="mt-4 text-gray-500">
        Stay connected for updates and early access.
      </p>

      <button
        onClick={() => setShowPopup(false)}
        className="mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold transition w-full"
      >
        Got It
      </button>
    </div>
  </div>
)}
    </div>

    
  );

}