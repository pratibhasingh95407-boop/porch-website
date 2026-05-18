import React from "react";
import {
  Leaf,
  Users,
  ShieldCheck,
  ArrowLeft,
  Globe,
  Truck,
  Sprout,
  HeartHandshake,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Back Button */}
      <div className="px-6 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full backdrop-blur">
            <Leaf size={18} />
            Smart Lifestyle Ecosystem
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            About Urbonix
          </h1>

          <p className="mt-8 text-xl leading-9 text-green-100 max-w-4xl mx-auto">
            Urbonix is building a technology-driven ecosystem focused on
            green living, wellness, local commerce, and sustainable
            digital experiences designed for modern lifestyles.
          </p>

          {/* Hero Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur">
              Green Living
            </div>

            <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur">
              Wellness
            </div>

            <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur">
              Local Commerce
            </div>

            <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur">
              Smart Ecosystem
            </div>
          </div>
        </div>
      </section>

      {/* Stats 
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            {
              title: "10K+",
              desc: "Active Users",
            },
            {
              title: "150+",
              desc: "Business Partners",
            },
            {
              title: "25+",
              desc: "Cities Connected",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-[32px] p-10 text-center border border-green-100 shadow-lg"
            >
              <h2 className="text-5xl font-bold text-green-700">
                {item.title}
              </h2>

              <p className="mt-4 text-lg text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
*/}
      {/* Ecosystem */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900">
              The Urbonix Ecosystem
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              Urbonix connects sustainability, wellness, local businesses,
              and digital convenience into one seamless lifestyle ecosystem.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Plant Marketplace",
                desc: "Discover plants, pots, décor, and gardening essentials from trusted local nurseries.",
                icon: <Sprout className="text-green-700" size={32} />,
              },
              {
                title: "Gardening Services",
                desc: "Book professionals for repotting, maintenance, landscaping, and plant care.",
                icon: <Users className="text-green-700" size={32} />,
              },
              {
                title: "Healthy Juice Delivery",
                desc: "Fresh wellness-focused juices delivered daily through smart subscriptions.",
                icon: <HeartHandshake className="text-green-700" size={32} />,
              },
              {
                title: "Local Vendor Network",
                desc: "Empowering local businesses through digital commerce and visibility.",
                icon: <Truck className="text-green-700" size={32} />,
              },
              {
                title: "Smart Lifestyle Platform",
                desc: "One platform for shopping, services, subscriptions, and wellness experiences.",
                icon: <Globe className="text-green-700" size={32} />,
              },
              {
                title: "Secure Commerce",
                desc: "Trusted digital infrastructure with reliable services and secure experiences.",
                icon: <ShieldCheck className="text-green-700" size={32} />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-50 p-8 rounded-[32px] border border-green-100 shadow-lg hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-green-800">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

          <div className="bg-white p-10 rounded-[36px] shadow-xl border border-green-100">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
              <Leaf className="text-green-700" size={30} />
            </div>

            <h2 className="mt-8 text-4xl font-bold text-green-800">
              Our Mission
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Our mission is to simplify modern lifestyles through
              smart digital platforms connecting users with trusted
              local services, sustainable products, wellness
              experiences, and greener everyday living.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[36px] shadow-xl border border-green-100">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
              <Globe className="text-green-700" size={30} />
            </div>

            <h2 className="mt-8 text-4xl font-bold text-green-800">
              Our Vision
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              We envision a future where sustainability and technology
              work together to create smarter homes, healthier
              communities, and connected local ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-gray-900">
            Building The Future of Sustainable Living
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9">
            Urbonix is continuously expanding its ecosystem with
            smarter digital experiences, AI-powered recommendations,
            stronger local commerce integration, and sustainable
            lifestyle innovations designed for the future.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-10 text-center">
        <p>
          © 2026 Urbonix. All rights reserved.
        </p>
      </footer>
    </div>
  );
}