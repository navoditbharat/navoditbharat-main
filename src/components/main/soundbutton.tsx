"use client";
import { Volume2 } from "lucide-react";
import { motion } from "framer-motion";
import { audioPlayer } from "@/utils/audio";

export function SoundButton() {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => audioPlayer.playStartupSound()}
      className="fixed bottom-8 right-8 p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
      aria-label="Play startup sound"
    >
      <Volume2 className="w-6 h-6 text-white" />
    </motion.button>
  );
}
