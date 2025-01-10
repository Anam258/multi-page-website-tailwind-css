"use client";
import Container from "../../components/Container";
import FadeIn from "../../components/FadeIn";
import React from "react";
import { FaRocket, FaHandshake, FaChartLine, FaUsers } from "react-icons/fa"; // Adding icons

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-400 to-blue-900 text-white w-full py-16">
      <Container>
        <div className="flex flex-col gap-10">
          {/* Heading Section */}
          <FadeIn>
            <h2 className="text-5xl font-extrabold text-center text-white mb-6">
              Empowering Brands Through Digital Excellence
            </h2>
          </FadeIn>

          {/* Introduction Text */}
          <FadeIn>
            <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
              At Digital Spark 1, we specialize in transforming your vision into reality. As a leading online marketing management company, we empower brands to reach new heights by leveraging innovative strategies, cutting-edge technologies, and tailored solutions designed to elevate your online presence.
            </p>
          </FadeIn>

          {/* Mission and Why Choose Us? Section */}
          <FadeIn>
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Mission */}
              <div className="flex-1 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
                <p className="text-base leading-relaxed">
                  Our mission is to provide businesses with the tools and expertise they need to thrive in an ever-evolving digital landscape. We aim to create meaningful connections between brands and their audiences, driving growth and long-term success.
                </p>
              </div>

              {/* Why Choose Us? */}
              <div className="flex-1 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Why Choose Us?</h3>
                <p className="text-base leading-relaxed">
                  With a team of experienced marketers, designers, and strategists, we deliver results-driven campaigns that align with your goals. Whether you’re looking to increase brand visibility, generate leads, or boost sales, we’ve got you covered.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* What We Offer Section */}
          <FadeIn>
            <div className="flex flex-col items-center gap-6">
              <h3 className="text-3xl font-semibold text-center text-white mb-6">
                What We Offer
              </h3>
              <ul className="list-disc list-inside max-w-3xl text-left space-y-4 text-lg">
                <li className="flex items-center gap-4">
                  <FaRocket className="text-blue-600 text-xl" />
                  Comprehensive online marketing strategies tailored to your business needs.
                </li>
                <li className="flex items-center gap-4">
                  <FaHandshake className="text-blue-600 text-xl" />
                  Innovative branding solutions to help you stand out in a crowded market.
                </li>
                <li className="flex items-center gap-4">
                  <FaChartLine className="text-blue-600 text-xl" />
                  Advanced analytics and performance tracking to optimize results.
                </li>
                <li className="flex items-center gap-4">
                  <FaUsers className="text-blue-600 text-xl" />
                  Expert social media management to connect with your audience effectively.
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Call to Action Button */}
          <FadeIn>
            <div className="text-center mt-8">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
