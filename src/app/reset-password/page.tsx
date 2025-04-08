"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add reset password logic later
        console.log("New password:", newPassword);
    };

    return (
        <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex items-center justify-center">
            {/* Background Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 opacity-30"
            />

            {/* Reset Password Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-[350px] text-center"
            >
                <h2 className="text-3xl font-bold mb-4">Reset Password</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                    Enter your new password below.
                </p>

                <form onSubmit={handleSubmit}>
                    <Input
                        type="password"
                        placeholder="New password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="mb-4"
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="mb-4"
                        required
                    />
                    <Button type="submit" className="w-full">
                        Reset Password
                    </Button>
                </form>
            </motion.div>
        </div>
    );
}
