import React from "react";
import Container from "../../components/Container";
import FadeIn from "../../components/FadeIn";
import { FaLaptopCode, FaPaintBrush, FaBullhorn } from "react-icons/fa"; // Adding role-related icons

const Careers = () => {
  const jobList = [
    {
      id: 1,
      title: "Software Engineer",
      location: "Remote",
      description: "Develop and maintain web applications using modern frameworks.",
      icon: <FaLaptopCode className="text-4xl text-blue-600" />,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      location: "New York, USA",
      description: "Design user-friendly interfaces and improve user experiences.",
      icon: <FaPaintBrush className="text-4xl text-blue-600" />,
    },
    {
      id: 3,
      title: "Marketing Specialist",
      location: "London, UK",
      description: "Plan and execute marketing campaigns to drive brand growth.",
      icon: <FaBullhorn className="text-4xl text-blue-600" />,
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-8">
        {/* Heading and Intro */}
        <FadeIn>
          <h2 className="text-4xl font-semibold text-center text-blue-600 mb-4">Join Our Team</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto text-lg">
            We are looking for passionate and talented individuals to be part of our growing team.
            Explore our open positions and apply today!
          </p>
        </FadeIn>

        {/* Job Listings */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobList.map((job) => (
              <div
                key={job.id}
                className="border p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl hover:bg-blue-50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div>{job.icon}</div>
                  <h3 className="text-2xl font-bold text-blue-600">{job.title}</h3>
                </div>
                <p className="text-gray-600">{job.location}</p>
                <p className="mt-2 text-gray-700">{job.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Application Form */}
        <FadeIn>
          <h3 className="text-3xl font-semibold mt-10 text-center text-blue-600">Submit Your Application</h3>
          <form className="mt-6 grid gap-6 max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              required
            />
            <textarea
              placeholder="Why are you a good fit for this role?"
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              rows="4"
              required
            ></textarea>
            <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all">
              Submit Application
            </button>
          </form>
        </FadeIn>
      </div>
    </Container>
  );
};

export default Careers;
