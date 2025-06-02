import React from "react";
import Footer from "../Footer";

function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-blue-100">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        Contact Us
      </h1>

      {/* Contact Info */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-1">Customer Support</h3>
            <p>
              Phone:{" "}
              <a href="tel:+18001234567" className="text-blue-600">
                1800-123-4567
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="officialamrit06825@mail.com" className="text-blue-600">
                officialamrit06825@gmail.com
              </a>
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-1">Corporate Office</h3>
            <p>FlipZone Ltd.</p>
            <p>123 Innovation Road, Bangalore, India</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-1">Business Inquiries</h3>
            <p>
              Email:{" "}
              <a href="mailto:www.flipkart8584@gmail.com" className="text-blue-600">
                www.flipkart8584@gmail.com
              </a>
            </p>
            <p>Hours: Mon–Fri, 10AM–6PM</p>
          </div>
        </div>
      </section>

      {/* Support Topics */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Popular Help Topics
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Order Tracking</li>
          <li>Return & Refund Policies</li>
          <li>Account Login & Security</li>
          <li>Payment Issues</li>
          <li>Product Warranty</li>
        </ul>
      </section>

      {/* Contact Form */}
      <section className="mb-10 bg-gray-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Send Us a Message
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Subject of your message"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2"
              rows="5"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Map or Address */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Visit Us</h2>
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4576940227073!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670b02d6e2b%3A0x6f154cf9b1d0de1e!2sBangalore%2C%20India!5e0!3m2!1sen!2sin!4v1616161616161"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
