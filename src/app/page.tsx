"use client";
import Head from "next/head";
import { motion } from "motion/react";

import { LoadingScreen } from "@/components/main/loading/LoadingScreen";
import Navbar from "@/components/main/Navbar/Navbar";
import Hero from "@/components/main/hero/Hero";
import ToggleMenuItem from "@/components/main/ToggleMenuItem";
import LifeJourney from "@/components/main/Experiance/LifeJourney";
import Footer from "@/components/main/Footer/Footer";
import MainLayout from "@/components/main/MainLayout";

export default function Home() {
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

      <MainLayout>
        <main className="flex justify-center items-center ">
          <Hero />
        </main>
        <div>
          <LifeJourney />
        </div>
        <Footer />
      </MainLayout>
    </>
  );
}
