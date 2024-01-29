"use client";
import Navbar from "./components/Navbar";
import Footer from "@/app/components/Footer";
import Slider from "@/app/components/Slider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Slider />

      <Footer />
    </main>
  );
}
