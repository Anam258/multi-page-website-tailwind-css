'use client'
import bannerOne from "../../public/images/banner/bannerOne.webp";
import bannerTwo from "../../public/images/banner/bannerTwo.webp";
import bannerThree from "../../public/images/banner/bannerThree.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./Container";
import FadeIn from "./FadeIn";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 w-full rounded-bl-3xl rounded-br-3xl relative px-4 overflow-hidden">
      <Container>
        <div className="text-white grid md:grid-cols-2 gap-20 font-titleFont place-items-center">
          <div className="flex flex-col gap-6 xl:gap-10">
            <FadeIn>
              <h1 className="text-3xl md:text-4xl lgl:text-5xl xl:text-6xl font-bold tracking-wide leading-tight text-shadow">
                Discover Your Creativity Like Never Before
              </h1>
            </FadeIn>
            <FadeIn>
              <p className="text-sm mdl:text-lg tracking-wide text-gray-100">
                Unlock endless possibilities with our professional tools and
                expert guidance. Whether you're an artist, a designer, or a
                dreamer, let us help you bring your ideas to life.
              </p>
            </FadeIn>
            <FadeIn>
              <div className="w-full p-6 xl:p-8 bg-white rounded-3xl flex flex-col lg:flex-row text-black justify-between gap-5 shadow-lg">
                <input
                  className="w-full h-12 border-[1px] text-base text-gray-600 placeholder:tracking-wide border-gray-300 rounded-xl px-4 outline-none hover:border-blue-400 focus-visible:border-blue-400 duration-300"
                  type="text"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />
                <button className="w-full h-12 rounded-xl bg-gradient-to-r from-black to-green-700 text-white uppercase font-medium text-sm tracking-wider hover:scale-105 hover:shadow-xl cursor-pointer duration-300 group">
                  Subscribe Now
                </button>
              </div>
            </FadeIn>
          </div>
          <div className="w-full relative flex justify-center items-center gap-6">
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center z-20 hover:scale-105 hover:rotate-3 transition-transform duration-300"
            >
              <Image
                className="w-52 rounded-2xl object-cover shadow-lg"
                src={bannerOne}
                alt="Creative workspace example"
              />
            </motion.div>
            <div className="flex flex-col gap-7 z-20">
              <motion.div
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="hover:scale-105 hover:-rotate-2 transition-transform duration-300"
              >
                <Image
                  className="w-52 rounded-2xl object-cover shadow-md"
                  src={bannerTwo}
                  alt="Teamwork illustration"
                />
              </motion.div>
              <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className="hover:scale-110 hover:rotate-3 transition-transform duration-300"
              >
                <Image
                  className="w-52 rounded-2xl object-cover shadow-md"
                  src={bannerThree}
                  alt="Creative ideas in action"
                />
              </motion.div>
            </div>
            <div className="w-72 h-72 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-600 to-green-400 blur-3xl opacity-70 animate-pulse" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
