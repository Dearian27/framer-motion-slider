"use client";
import Image from "next/image";
import "./styles.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/slides/img1.jpg", "/slides/img2.png", "/slides/img3.jpg"];
const length = images.length;

const variants = {
  initial: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.8,
    transition: {
      x: { type: "spring", stiffness: 100, damping: 14 },
      opacity: { duration: 0.8 },
      scale: { type: "spring", stiffness: 100, damping: 14 },
    },
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 30, damping: 20 },
      opacity: { duration: 1.2 },
      scale: { type: "spring", stiffness: 30, damping: 20 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.8,
    transition: {
      x: { type: "spring", stiffness: 30, damping: 14 },
      opacity: { duration: 0.8 },
      scale: { type: "spring", stiffness: 30, damping: 14 },
    },
  }),
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
