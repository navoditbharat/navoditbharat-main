"use client";
import Head from "next/head";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Footer from "@/components/main/Footer/Footer";
import { LoadingScreen } from "@/components/main/loading/LoadingScreen";
import Navbar from "@/components/main/Navbar/Navbar";
import { SoundButton } from "@/components/main/soundbutton";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showSound, setShowSound] = useState(false);

  const handleLoadingComplete = () => {
    setLoading(false);
    setTimeout(() => setShowSound(true), 1000); // Show sound button after transition
  };

  return (
    <>
      <Head>
        <link rel="me" href="https://peerlist.io/navoditbharat" />
        <link rel="me" href="https://www.linkedin.com/in/navoditbharat" />
        <link rel="me" href="https://instagram.com/navoditbharat" />
        <link rel="me" href="https://github.com/navoditbharat" />
        <link
          rel="me"
          href="https://www.upwork.com/en-gb/freelancers/~0153f79cc9e470e0cd"
        />
      </Head>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Navbar />
            <main className="flex justify-center items-center h-screen">
              <div className="text-center">Coming Soon...</div>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      {showSound && <SoundButton />}
    </>
  );
}
