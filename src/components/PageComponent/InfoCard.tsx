"use client"
import React, { useState } from "react"
import Available from "../Available"
import { chiragBio, chiragName } from "@/data/ChiragData/data"
import { FaFilePdf } from "react-icons/fa"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"

const InfoCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section>
      <div className="flex flex-col gap-2">
        <div className="block md:hidden">
          <Available text="Available" />
        </div>

        <div className="flex gap-3 items-center">
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:brightness-75 transition duration-200 select-none w-1/3 md:w-auto"
          >
            <Image
              src="/assets/Images/pfps/myphoto.jpeg"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-2xl w-20 h-20 md:w-24 md:h-24 object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold">{chiragName}</h1>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 group flex items-center gap-1 hover:bg-opacity-80 bg-zinc-800/50 transition-all duration-200 px-2.5 py-1 rounded-md border border-zinc-700/50 hover:scale-105"
              >
                <FaFilePdf className="text-sm text-white transition-colors duration-200" />
                <span className="text-white text-xs font-medium">Resume</span>
              </a>
              <div className="hidden md:block">
                <Available text="Available" />
              </div>
            </div>
            <p className="text-zinc-400">{chiragBio}</p>
            <p className="text-sm text-zinc-500 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Gurgaon, India
            </p>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src="/assets/Images/pfps/myphoto.jpeg"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="rounded-lg max-h-[90vh] max-w-[90vw] object-contain"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-10 right-0 text-white text-2xl"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default InfoCard