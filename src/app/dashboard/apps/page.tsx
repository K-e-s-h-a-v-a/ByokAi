"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Download, Pencil } from "lucide-react";
import { motion } from "framer-motion";

const dummyApps = [
    {
        id: "1",
        name: "AI Blog Generator",
        createdAt: "2025-03-01",
        description: "Generates SEO-friendly blogs using GPT-4.",
    },
    {
        id: "2",
        name: "E-Commerce Assistant",
        createdAt: "2025-03-10",
        description: "An AI assistant to handle product queries in an online store.",
    },
];

export default function AppsPage() {
    const [open, setOpen] = useState(false);
    const [newApp, setNewApp] = useState({ name: "", description: "" });

    const handleSubmit = () => {
        console.log("New App Submitted:", newApp);
        setNewApp({ name: "", description: "" });
        setOpen(false);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Your Apps</h1>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button className="flex items-center gap-2 cursor-pointer">
                            <Plus className="w-4 h-4 cursor-pointer" />
                            Create New App
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create New App</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <Input
                                placeholder="App Name"
                                value={newApp.name}
                                onChange={(e) => setNewApp((prev) => ({ ...prev, name: e.target.value }))}
                            />
                            <Textarea
                                placeholder="App Description"
                                value={newApp.description}
                                onChange={(e) => setNewApp((prev) => ({ ...prev, description: e.target.value }))}
                            />
                        </div>
                        <DialogFooter className="mt-4 ">
                            <Button onClick={handleSubmit} className="cursor-pointer">Create App</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {dummyApps.map((app, index) => (
                    <motion.div
                        key={app.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="shadow-lg border border-gray-200 dark:border-gray-700">
                            <CardHeader>
                                <h2 className="text-lg font-semibold">{app.name}</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{app.createdAt}</p>
                            </CardHeader>
                            <CardContent>
                                <p>{app.description}</p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline" className="flex items-center gap-2">
                                    <Download className="w-4 h-4" />
                                    Download
                                </Button>
                                <Button variant="secondary" className="flex items-center gap-2">
                                    <Pencil className="w-4 h-4" />
                                    Edit
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
