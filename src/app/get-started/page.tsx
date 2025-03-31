"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GetStarted() {
  return (
    <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center">
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 opacity-30"
      />

      {/* Get Started Section */}
      <motion.div
        className="relative z-10 text-center max-w-3xl p-6 bg-white mt-20 mb-20 dark:bg-gray-800 shadow-lg rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold">Welcome to KeyBridge</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Get started in just a few simple steps and unlock the full power of AI.
        </p>

        {/* Steps Section */}
        <div className="mt-8 space-y-6">
          {[
            { step: "1", title: "Create an Account", desc: "Sign up with your email to begin." },
            { step: "2", title: "Add Your API Key", desc: "Connect your AI key for a personalized experience." },
            { step: "3", title: "Explore Features", desc: "Start using AI tools, templates, and analytics." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md flex items-center gap-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Step Number with Fixed Size */}
              <span className="text-xl font-bold bg-blue-600 text-white px-4 py-2 rounded-full w-10 h-10 flex items-center justify-center">
                {item.step}
              </span>

              {/* Step Content with Fixed Width */}
              <div className="flex-1 min-w-[200px]">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/signup"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
          >
            Sign Up
          </Link>
        </div>

        <p className="mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 underline">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
