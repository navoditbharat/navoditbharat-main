"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { welcomeTexts } from "@/utils/welcome-texts";
import { audioPlayer } from "@/utils/audio";

interface WelcomeAnimationProps {
  onComplete: () => void;
}

export function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < welcomeTexts.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (!isComplete) {
        setIsComplete(true);
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [currentIndex, isComplete, onComplete]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white">
            {welcomeTexts[currentIndex].text}
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
