import React, { useState, useEffect } from "react"

const LocalTime = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    // This will only run on the client side
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!time) {
    return null // Return null during SSR and initial render
  }

  return (
    <div suppressHydrationWarning>
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  )
}

export default LocalTime
