"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {

  return (
    <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 opacity-30"
      />

      {/* Sign Up Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 bg-white mt-20 mb-20 dark:bg-gray-800 shadow-lg w-[350px] rounded-lg p-7"
      >
        <h1 className="text-4xl font-bold mb-7">Sign Up</h1>

        <div className="space-y-4">
          <Input type="email" placeholder="Email" className="w-full" />
          <div className="flex space-x-2">
            <Input type="text" placeholder="First name" className="w-1/2" />
            <Input type="text" placeholder="Last name" className="w-1/2" />
          </div>
          <Input type="text" placeholder="Mobile" className="w-full" />
          <Input type="password" placeholder="Password" className="w-full" />
        </div>

        <Button className="bg-blue-700 mt-7 w-[200px] cursor-pointer" variant="link">Sign Up</Button>

        {/* Divider */}
        <div className="border-t dark:border-gray-400 border-gray-700 mt-7" />

        {/* Sign in with Google Button */}
        <Button
          variant="outline"
          className="mt-5 flex items-center justify-center w-full py-2 cursor-pointer bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <Image
            src='/g.png' // Replace with your downloaded Google brand icon path
            alt="Google Logo"
            width={20}
            height={20}
            className="mr-4"
          />
          <span className="text-gray-700 dark:text-white font-medium">Sign in with Google</span>
        </Button>
        <p className="mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 underline">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
