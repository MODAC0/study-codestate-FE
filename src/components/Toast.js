import React, { useEffect, useState } from 'react'

export default function Toast({ text, dismissTime }) {
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    let mounted = true
    setTimeout(() => {
      setIsFading(true)
    }, dismissTime - 500)

    return () => {
      mounted = false
    }
  })

  return (
    <div className={`notification ${isFading ? 'fade-out' : ''}`}>
      {text}
    </div>
  )
}
