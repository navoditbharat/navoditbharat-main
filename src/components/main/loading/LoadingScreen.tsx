"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { WelcomeAnimation } from "./WelcomeAnimation";
import { useTheme } from "next-themes";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className={`fixed inset-0 z-50 min-h-screen flex items-center justify-center overflow-hidden`}
      >
        <WelcomeAnimation onComplete={onComplete} />
      </motion.div>
    </AnimatePresence>
  );
}
