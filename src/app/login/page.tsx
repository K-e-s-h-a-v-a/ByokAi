"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center">
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 opacity-30"
      />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 bg-white dark:bg-gray-800 shadow-lg w-[350px] rounded-lg p-7"
      >
        <h1 className="text-4xl font-bold mb-7">Login</h1>
        
        {/* Email Input */}
        <Input type="email" placeholder="Email" className="mt-4" />
        
        {/* Password Input */}
        <Input type="password" placeholder="Password" className="mt-4" />
        
        {/* Login Button */}
        <Button className="mt-6 w-full bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">
          Login
        </Button>
        
        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-600 mt-6" />

        {/* Google Sign-In Button */}
        <Button variant="outline" className="mt-4 w-full flex items-center justify-center gap-2 cursor-pointer">
          <Image src="/g.png" alt="Google" width={20} height={20} />
          Sign in with Google
        </Button>

        {/* Forgot Password */}
        <p className="mt-4 text-sm">
          <Link href="/forgot-password" className="text-blue-600 dark:text-blue-400 underline">
            Forgot Password?
          </Link>
        </p>

        {/* Sign Up Link */}
        <p className="mt-4 text-sm">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600 dark:text-blue-400 underline">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;