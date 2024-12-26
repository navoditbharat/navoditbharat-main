import Footer from "@/components/main/Footer/Footer";
import Navbar from "@/components/main/Navbar/Navbar";
import Head from "next/head";

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
      <nav className="flex justify-center m-4 ">
        <Navbar />
      </nav>
      <main className="flex justify-center items-center h-screen">
        <div className="text-center">Coming Soon...</div>
      </main>

      <Footer />
    </>
  );
}
