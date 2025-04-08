"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner"; // ✅ import toast

export default function OtpVerification() {
    const [otp, setOtp] = useState("");
    const [otpTimeLeft, setOtpTimeLeft] = useState(600); // 10 mins
    const [resendCooldown, setResendCooldown] = useState(0);

    useEffect(() => {
        const otpTimer = setInterval(() => {
            setOtpTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(otpTimer);
    }, []);

    useEffect(() => {
        if (resendCooldown > 0) {
            const cooldownTimer = setTimeout(() => {
                setResendCooldown(resendCooldown - 1);
            }, 1000);
            return () => clearTimeout(cooldownTimer);
        }
    }, [resendCooldown]);

    const handleResend = () => {
        setOtpTimeLeft(600); // Reset OTP timer
        setResendCooldown(30); // Resend cooldown
        toast.success("OTP resent successfully ✅"); // 🎉 show toast
    };

    const formatTime = (time: number) => {
        const mins = Math.floor(time / 60)
            .toString()
            .padStart(2, "0");
        const secs = (time % 60).toString().padStart(2, "0");
        return `${mins}:${secs}`;
    };

    return (
        <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 opacity-30"
            />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="z-10 bg-white dark:bg-gray-800 shadow-lg w-[350px] rounded-lg p-7 text-center"
            >
                <h1 className="text-3xl font-bold mb-4">Enter OTP</h1>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                    Please enter the OTP sent to your email. It expires in{" "}
                    <span className="font-semibold">{formatTime(otpTimeLeft)}</span>.
                </p>
                <Input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="mb-4"
                />
                <Button className="w-full">Verify OTP</Button>
                <div className="mt-4">
                    <Button
                        variant="ghost"
                        onClick={handleResend}
                        disabled={resendCooldown > 0}
                    >
                        {resendCooldown > 0
                            ? `Resend in ${resendCooldown}s`
                            : "Resend OTP"}
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
