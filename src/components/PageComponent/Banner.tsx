"use client"
import React from "react"
import LocalTime from "@/utils/LocalTime"

const Banner: React.FC = () => {
  return (
    <section className="fixed top-4 right-4 md:right-8 z-40 select-none">
      <a
        href="https://www.google.com/search?q=time"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1 md:gap-2 items-center text-white/65 hover:text-white/90 transition-all duration-100 font-medium"
      >
        <span className="hidden md:block">Local time</span>
        <span className="md:text-sm text-base">
          <LocalTime />
        </span>
      </a>
    </section>
  )
}

export default Banner
