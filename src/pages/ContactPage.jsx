import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  Send,
  Clock3,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
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
            <Mail size={18} />
            Contact Urbonix
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Get In Touch
          </h1>

          <p className="mt-8 text-xl leading-9 text-green-100 max-w-4xl mx-auto">
            We’d love to hear from you. Whether you have questions,
            partnership inquiries, feedback, or support requests —
            the Urbonix team is here to help.
          </p>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur">
              Customer Support
            </div>

            <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur">
              Partnerships
            </div>

            <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur">
              Business Inquiries
            </div>

            <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur">
              Feedback & Help
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>

            <h2 className="text-5xl font-bold text-gray-900">
              Contact Information
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Reach out to us for support, partnerships, business
              opportunities, or general inquiries related to the
              Urbonix ecosystem.
            </p>

            <div className="mt-14 space-y-8">

              {/* Email */}
              <div className="bg-green-50 border border-green-100 rounded-[32px] p-8 flex gap-6 shadow-lg hover:-translate-y-1 transition">

                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
                  <Mail className="text-green-700" size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-800">
                    Email
                  </h3>

                  <p className="mt-3 text-gray-600 text-lg">
                    porch@urbonix.co.in
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-green-50 border border-green-100 rounded-[32px] p-8 flex gap-6 shadow-lg hover:-translate-y-1 transition">

                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
                  <Phone className="text-green-700" size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-800">
                    Phone
                  </h3>

                  <p className="mt-3 text-gray-600 text-lg">
                    +91 7303356994
                  </p>
                </div>
              </div>

              {/* Office */}
              <div className="bg-green-50 border border-green-100 rounded-[32px] p-8 flex gap-6 shadow-lg hover:-translate-y-1 transition">

                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
                  <MapPin className="text-green-700" size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-800">
                    Office
                  </h3>

                  <p className="mt-3 text-gray-600 text-lg leading-8">
                    G32 GYC Yamuna Expressway,
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Extra Info */}
            <div className="mt-14 grid md:grid-cols-2 gap-6">

              <div className="bg-white border border-green-100 p-8 rounded-[32px] shadow-lg">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Clock3 className="text-green-700" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Support Hours
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Monday to Saturday <br />
                  9:00 AM – 7:00 PM
                </p>
              </div>

              <div className="bg-white border border-green-100 p-8 rounded-[32px] shadow-lg">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Globe className="text-green-700" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Service Areas
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Expanding across major cities and local communities in India.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-green-50 border border-green-100 rounded-[40px] p-10 shadow-2xl">

            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
                <Send className="text-green-700" />
              </div>

              <div>
                <h2 className="text-4xl font-bold text-green-800">
                  Send Message
                </h2>

                <p className="mt-1 text-gray-600">
                  We usually respond within 24 hours.
                </p>
              </div>
            </div>

            <form className="mt-10 space-y-6">

              <div>
                <label className="block mb-3 text-gray-700 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition bg-white"
                />
              </div>

              <div>
                <label className="block mb-3 text-gray-700 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition bg-white"
                />
              </div>

              <div>
                <label className="block mb-3 text-gray-700 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition bg-white"
                />
              </div>

              <div>
                <label className="block mb-3 text-gray-700 font-medium">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition bg-white"
                ></textarea>
              </div>

              <button className="w-full bg-green-700 hover:bg-green-800 text-white px-8 py-5 rounded-2xl font-semibold transition flex items-center justify-center gap-3 text-lg shadow-xl">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-green-700 to-green-900 rounded-[40px] p-16 text-center text-white shadow-2xl">

          <h2 className="text-5xl font-bold">
            Let’s Build Something Greener Together
          </h2>

          <p className="mt-8 text-lg text-green-100 max-w-3xl mx-auto leading-8">
            Urbonix is building connected lifestyle ecosystems focused
            on sustainability, wellness, and smarter local commerce.
          </p>

          <button className="mt-10 bg-white text-green-800 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition">
            Explore Urbonix
          </button>
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