"use client"
import Image from "next/image"
import { chiragLink } from "@/data/ChiragData/data"
import { useState } from "react"

const Nav = () => {
  const [isArrowVisible, setIsArrowVisible] = useState(true)

  const handleArrowVisibility = () => {
    setIsArrowVisible(false)
  }

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center">
      <div className="relative bg-mainBlack border border-zinc-700 px-4 py-2.5 rounded-xl flex items-center gap-4">
        <div className="flex gap-5 items-center">
          {chiragLink.map((link) => (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <div className="h-6 w-[1px] bg-zinc-700"></div>
        <div
          className="rounded-md hover:brightness-75 transition duration-200"
          onMouseEnter={handleArrowVisibility}
        >
          <Image
            src="/assets/Images/pfps/myphoto.jpeg"
            alt="Profile Picture"
            className="rounded-lg w-8 h-8 object-cover"
            width={32}
            height={32}
          />
        </div>
        {isArrowVisible && (
          <div id="arrow" className="absolute -top-10 right-0 z-50">
            <Image
              src="/assets/Images/gif/arrow.gif"
              alt="arrow"
              className="w-12 h-12"
              width={48}
              height={48}
              priority
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav
