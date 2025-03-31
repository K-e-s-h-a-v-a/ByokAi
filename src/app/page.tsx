/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const features = [
  {
    title: "Bring Your Own API Key",
    desc: "Use your own API key to access AI models like ChatGPT, Gemini, and Llama.",
    img: "/ai.avif",
  },
  {
    title: "Prebuilt Templates",
    desc: "Kickstart your projects with AI-powered templates for databases, websites, and more.",
    img: "/database.avif",
  },
  {
    title: "Team Workspaces",
    desc: "Collaborate with your team, assign roles, and track progress seamlessly.",
    img: "/team-work.avif",
  },
  {
    title: "Advanced Analytics",
    desc: "Monitor token usage, model preferences, and prompt history in real-time.",
    img: "/analytics.avif",
  },
];

const funFacts = [
  "🤖 AI can beat humans at Chess and Go, but struggles with basic common sense!",
  "📜 The first AI program was written in 1951 by Christopher Strachey!",
  "📊 AI models are trained on petabytes of data – that’s millions of GBs!",
  "🚗 AI is used in self-driving cars, medical diagnosis, and even composing music!",
];
const FloatingParticles = () => {
  const [particles] = useState(
    Array.from({ length: 250 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2, // 2px to 10px
      opacity: Math.random() * 0.5 + 0.5,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-blue-500 dark:bg-blue-300 rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.y}%`,
            left: `${p.x}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: ["0%", "10%", "-10%", "0%"],
            x: ["0%", "5%", "-5%", "0%"],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};


export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <FloatingParticles />
      <div className="relative z-50">
      <section
  className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10"
  style={{
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Gradient overlay to blend the image with the next section */}
  <div
    className="absolute inset-0 bg-gradient-to-b from-transparent  to-gray-50  dark:to-gray-900 pointer-events-none"
    style={{ zIndex: 1 }}
  />

  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent pb-4 relative z-10"
  >
    Supercharge Your AI Experience
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="mt-4 text-xl relative z-10"
  >
    Bring your own AI key, use powerful templates, and track everything in one place.
  </motion.p>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
    className="mt-6 relative z-10"
  >
    <Link
      href="/get-started"
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg"
    >
      Get Started
    </Link>
  </motion.div>
</section>


        <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={feature.img}
                alt={feature.title}
                width={200}
                height={200}
                className="rounded-lg shadow-md mb-4"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              <h2 className="text-2xl font-bold">{feature.title}</h2>
              <p className="mt-2 text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </section>

        <section className="py-16 bg-blue-100 dark:bg-blue-900 text-center relative z-10">
          <h2 className="text-3xl font-bold">Did You Know?</h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 space-y-4 text-lg"
          >
            {funFacts.map((fact, index) => (
              <motion.p
                key={index}
                className="italic px-4 py-2 "
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {fact}
              </motion.p>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
