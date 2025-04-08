"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'



const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
]

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className={` -ml-20 overflow-y-hidden`}>
                <Image
                  src='/white-logo.png' // Replace with your logo path
                  alt="KeyBridge Logo"
                  width={`250`}
                  height={`3`}
                />
              </div>
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
                >
                  <Link href={link.href}>
                    <div className="px-3 py-2 rounded-md text-sm font-medium">
                      {link.label}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
