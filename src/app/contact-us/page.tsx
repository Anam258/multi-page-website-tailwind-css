import Container from "../../components/Container";
import FadeIn from "../../components/FadeIn";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Icons for contact info

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-400 to-blue-900 py-16 text-white">
      <Container>
        <div className="flex flex-col gap-10">
          {/* Heading */}
          <FadeIn>
            <h2 className="text-4xl font-extrabold text-center mb-4">Contact Us Today</h2>
          </FadeIn>

          {/* Introduction Text */}
          <FadeIn>
            <p className="text-center max-w-3xl mx-auto text-lg leading-relaxed">
              We are here to assist you with any inquiries you may have about our services.
              Feel free to reach out via the contact form below or use the provided contact information.
            </p>
          </FadeIn>

          {/* Contact Information and Form */}
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-10 justify-between">
              {/* Contact Information Section */}
              <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-semibold text-blue-600 mb-6">Contact Information</h3>
                <p className="flex items-center gap-4 mb-4">
                  <FaPhoneAlt className="text-blue-600 text-2xl" />
                  <span><strong>Phone:</strong> +123-456-7890</span>
                </p>
                <p className="flex items-center gap-4 mb-4">
                  <FaEnvelope className="text-blue-600 text-2xl" />
                  <span><strong>Email:</strong> contact@example.com</span>
                </p>
                <p className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                  <span><strong>Address:</strong> 123 Main Street, Cityville, USA</span>
                </p>
              </div>

              {/* Contact Form Section */}
              <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-semibold text-blue-600 mb-6">Send Us a Message</h3>
                <form className="flex flex-col gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 transition-all"
                  />
                  <button
                    type="submit"
                    className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all transform hover:scale-105"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
