import Container from "../../components/Container";
import FadeIn from "../../components/FadeIn";
import React from "react";
import { FaCode, FaPaintBrush, FaBullhorn } from "react-icons/fa"; // Adding icons

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We create modern, responsive, and scalable websites tailored to your business needs.",
      icon: <FaCode className="text-3xl text-blue-600" />, // Adding icon
    },
    {
      id: 2,
      title: "Graphic Design",
      description:
        "Our design team crafts stunning visuals to help your brand stand out.",
      icon: <FaPaintBrush className="text-3xl text-blue-600" />, // Adding icon
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "We provide comprehensive digital marketing strategies to grow your online presence.",
      icon: <FaBullhorn className="text-3xl text-blue-600" />, // Adding icon
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-10">
        {/* Heading Section */}
        <FadeIn>
          <h2 className="text-4xl font-semibold text-center text-blue-700">
            Our Professional Services
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg mt-2">
            We offer a range of top-notch services to meet your personal and business needs.
            Explore what we can do for you.
          </p>
        </FadeIn>

        {/* Services Cards */}
        <FadeIn>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service) => (
              <div
                key={service.id}
                className="bg-white border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="p-6 flex flex-col items-center">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-3">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Call to Action Section */}
        <FadeIn>
          <div className="flex flex-col items-center mt-12">
            <h3 className="text-3xl font-semibold text-center text-blue-700">
              Ready to Get Started?
            </h3>
            <p className="text-gray-700 text-center mt-4 max-w-2xl text-lg">
              Contact us today to discuss your requirements and see how our services can help
              you achieve your goals.
            </p>
            <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
};

export default Services;
