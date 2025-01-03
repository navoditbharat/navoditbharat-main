import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";

import navodit from "../../../../public/navodit.jpg";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-start justify-between">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 text-left">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "clamp(2rem, 8vw, 3.75rem)",
            whiteSpace: "nowrap",
          }}
        >
          Navodit Bharat
        </motion.h1>
        <motion.div
          className="text-lg md:text-xl font-medium"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Typewriter
            options={{
              strings: [
                "Software Developer",
                "Tech Enthusiast",
                "Open Source Contributor",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </motion.div>
        <motion.div
          className="flex space-x-4"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          <Button> Get in Touch</Button>

          <Button variant="secondary">See My Work</Button>
        </motion.div>
      </div>

      {/* Right Photo */}
      <motion.div
        className="relative md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Image Wrapper with Border Effect */}
        <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px] before:w-full before:max-w-[200px] md:before:max-w-[250px] before:h-full before:border-2 before:border-peach before:z-[-1]">
          <Image
            alt="Navodit Bharat"
            className="hover:filter hover:saturate-150 transition rounded-t-full duration-500 z-10 w-full max-w-[200px] md:max-w-[250px]"
            src={navodit}
            width={960}
            height={980}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
