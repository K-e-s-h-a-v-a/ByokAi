"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center">
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 opacity-30"
      />

      {/* Forgot Password Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 bg-white dark:bg-gray-800 shadow-lg w-[350px] rounded-lg p-7"
      >
        <h1 className="text-3xl font-bold mb-4">Forgot Password?</h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Enter your email, and we’ll send you an OTP to reset your password.
        </p>

        {/* Email Input */}
        <Input type="email" placeholder="Enter your email" className="mt-4" />

        {/* Send OTP Button */}
        <Button className="mt-6 w-full bg-blue-600 text-white hover:bg-blue-700">
          Send OTP
        </Button>

        {/* Back to Login */}
        <p className="mt-4 text-sm">
          Remembered your password?{" "}
          <Link href="/login" className="text-blue-600 dark:text-blue-400 underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
