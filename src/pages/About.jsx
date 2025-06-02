import React from 'react';
import Footer from '../Footer';

function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-blue-50">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">About Us</h1>

      {/* Company Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Company Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 2007, our company is one of the leading e-commerce platforms trusted by millions of customers.
          We offer a wide range of products from electronics, fashion, home essentials, and more. Our aim is to
          provide exceptional shopping experiences by blending innovation and technology.
        </p>
      </section>

      {/* Our Values */}
      <section className="mb-12 bg-gray-100 p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Core Values</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Customer Centricity – Our customers are at the heart of everything we do.</li>
          <li>Innovation – We believe in pushing boundaries with cutting-edge tech solutions.</li>
          <li>Integrity – We uphold the highest standards of honesty and fairness.</li>
          <li>Speed – We work swiftly to deliver solutions without compromising quality.</li>
        </ul>
      </section>

      {/* Our Culture */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Work Culture</h2>
        <p className="text-gray-700 leading-relaxed">
          Our work culture promotes growth, learning, and collaboration. We are committed to maintaining a healthy
          work-life balance, empowering our employees, and fostering an inclusive environment.
        </p>
      </section>

      {/* Milestones */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Journey & Milestones</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">2007</h3>
            <p>Launched as a small online bookstore.</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">2010</h3>
            <p>Expanded into electronics and fashion.</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">2015</h3>
            <p>Crossed 10 million registered users.</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">2020</h3>
            <p>Introduced AI-based product recommendations.</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">2024</h3>
            <p>Launched international delivery services.</p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Meet the Team</h2>
        <p className="text-gray-700">
          Behind our success is a team of visionary leaders, experienced developers, customer support heroes,
          creative designers, and logistics experts. We all work together with one mission – to delight our customers.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-2 text-blue-800">Want to Join Us?</h2>
        <p className="text-gray-700 mb-4">
          Explore career opportunities and be part of our exciting journey.
        </p>
        <a
          href="/careers"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Careers
        </a>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default About;
