"use client"
import { chiragShortName } from "@/data/ChiragData/data"
import { useState, useEffect } from "react"

const motivationalQuotes = [
  "The best error message is the one that never shows up. - Thomas Fuchs",
  "The most damaging phrase in the language is 'We've always done it this way.' - Grace Hopper",
  "The best performance improvement is the transition from the nonworking state to the working state. - John Ousterhout",
  "The best way to get a project done faster is to start sooner. - Jim Highsmith",
  "The most important single aspect of software development is to be clear about what you are trying to build. - Bjarne Stroustrup",
  "The best code is no code at all. - Jeff Atwood"
]

const Footer = () => {
  const [quote, setQuote] = useState<string>("")
  
  useEffect(() => {
    // This will only run on the client side
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    setQuote(randomQuote)
  }, [])

  return (
    <footer className="md:mb-12 mb-16">
      <div className="border-t border-zinc-700 my-6" />
      <div className="flex flex-col gap-4 items-center text-center px-4">
        {quote && (
          <p className="text-sm italic text-zinc-400 max-w-2xl">
            &ldquo;{quote}&rdquo;
          </p>
        )}
        <div className="flex flex-col gap-1">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {chiragShortName}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            {/* Designed & Made with ❤️ by chirag */}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
