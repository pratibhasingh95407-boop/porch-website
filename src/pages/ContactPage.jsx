import React from "react";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-green-800 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-8 text-lg text-green-100">
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold text-green-800">
              Get In Touch
            </h2>

            <div className="mt-12 space-y-8">
              <div className="flex items-center gap-5">
                <div className="bg-green-100 p-4 rounded-2xl">
                  <Mail className="text-green-700" />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    porch@urbonix.co.in
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-green-100 p-4 rounded-2xl">
                  <Phone className="text-green-700" />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Phone
                  </h3>
                  <p className="text-gray-600">
                    +91 9540759906
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-green-100 p-4 rounded-2xl">
                  <MapPin className="text-green-700" />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Office
                  </h3>
                  <p className="text-gray-600">
                   G32 GYC Yamuna Express Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-10 rounded-[32px] border border-green-100">
            <h2 className="text-3xl font-bold text-green-800">
              Send Message
            </h2>

            <form className="mt-10 space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
              ></textarea>

              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}