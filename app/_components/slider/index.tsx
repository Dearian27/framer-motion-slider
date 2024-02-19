"use client";
import Image from "next/image";
import "./styles.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/slides/img1.jpg", "/slides/img2.png", "/slides/img3.jpg"];
const length = images.length;

const variants = {
  initial: (direction: number) => {
    return {
      x: [direction > 0 ? "100%" : "-100%", direction > 0 ? "100%" : "-100%"],
      opacity: 1,
      scale: [0.9, 0.9],
      transition: {
        type: "ease-in-out",
        duration: 2,
      },
    };
  },
  animate: (direction: number) => {
    return {
      x: [
        direction > 0 ? "100%" : "-100%",
        direction > 0 ? "100%" : "-100%",
        "0%",
        "0%",
      ],
      opacity: 1,
      scale: [0.9, 0.9, 0.9, 1],
      transition: {
        type: "ease-in-out",
        duration: 4.4,
      },
    };
  },
  exit: (direction: number) => {
    return {
      x: ["0%", "0%", direction > 0 ? "-100%" : "100%"],
      opacity: 1,
      scale: [1, 0.9, 0.9],
      transition: {
        type: "ease-in-out",
        duration: 3,
      },
    };
  },
};

const Slider = () => {
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const nextStep = () => {
    setDirection(1);
    setCount(count + 1);
    setIndex((prev) => (prev + 1) % length);
  };
  const prevStep = () => {
    setDirection(-1);
    setCount(count + 1);
    setIndex((prev) => Math.abs((prev - 1) % length));
  };

  return (
    <section className="container">
      <div className="slideshow">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            key={images[index] + "slide" + count}
            className="slide"
            custom={direction}
          >
            <Image
              height={1080}
              width={1920}
              className="slides"
              src={images[index]}
              alt="slides"
              key={images[index] + "img" + count}
            />
          </motion.div>
        </AnimatePresence>
        <button className="prev" onClick={prevStep}>
          ←
        </button>
        <button className="next" onClick={nextStep}>
          →
        </button>
      </div>
    </section>
  );
};

export default Slider;
