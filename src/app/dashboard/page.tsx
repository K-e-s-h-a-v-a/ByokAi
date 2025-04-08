"use client";

import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(
    ArcElement,
    BarElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

export default function DashboardPage() {
    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Sidebar */}
            <aside className="fixed left-0  w-[250px] h-full bg-white dark:bg-gray-800 shadow-lg z-20 p-6">
                <nav className="space-y-4">
                    <Link href="#" className="block hover:text-blue-500 font-medium">
                        Overview
                    </Link>
                    <Link href="#" className="block hover:text-blue-500 font-medium">
                        Apps
                    </Link>
                    <Link href="#" className="block hover:text-blue-500 font-medium">
                        Databases
                    </Link>
                    <Link href="#" className="block hover:text-blue-500 font-medium">
                        Templates
                    </Link>
                    <Link href="#" className="block hover:text-blue-500 font-medium">
                        Settings
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ml-[250px] flex-1 p-6">
                <h1 className="text-4xl font-bold mb-8">Overview</h1>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { title: "Tokens Used", value: "12,345" },
                        { title: "Apps Generated", value: "24" },
                        { title: "Databases Used", value: "8" },
                        { title: "Templates Downloaded", value: "17" },
                    ].map((metric) => (
                        <Card key={metric.title}>
                            <CardHeader>
                                <CardTitle>{metric.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">{metric.value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {/* Line Chart */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Token Usage Over Time</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <Line
                                    data={{
                                        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                                        datasets: [
                                            {
                                                label: "Tokens",
                                                data: [1000, 2000, 3000, 2500, 4000],
                                                fill: false,
                                                borderColor: "#3b82f6",
                                                tension: 0.4,
                                                pointBackgroundColor: "#3b82f6",
                                            },
                                        ],
                                    }}
                                    options={{ responsive: true, maintainAspectRatio: false }}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Bar Chart */}
                    <Card>
                        <CardHeader>
                            <CardTitle>App Usage by Category</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <Bar
                                    data={{
                                        labels: ["E-commerce", "Chatbots", "Dashboards", "Portfolio"],
                                        datasets: [
                                            {
                                                label: "Apps",
                                                data: [8, 5, 6, 4],
                                                backgroundColor: "#10b981",
                                            },
                                        ],
                                    }}
                                    options={{ responsive: true, maintainAspectRatio: false }}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Doughnut Chart */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Template Download Distribution</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <Doughnut
                                    data={{
                                        labels: ["Admin Panels", "Landing Pages", "Auth Systems"],
                                        datasets: [
                                            {
                                                data: [10, 4, 3],
                                                backgroundColor: ["#f59e0b", "#3b82f6", "#10b981"],
                                            },
                                        ],
                                    }}
                                    options={{ responsive: true, maintainAspectRatio: false }}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Activity Log */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                <li>✅ Generated E-commerce app — 2 hours ago</li>
                                <li>📄 Downloaded Template: Admin Panel — Yesterday</li>
                                <li>🔐 Updated API key — 2 days ago</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
