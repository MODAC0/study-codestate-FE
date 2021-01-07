import React, { useEffect, useState } from 'react'

export default function Toast({ text, dismissTime }) {
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsFading(true)
    }, dismissTime - 500)
  })

  return (
    <div className={`notification ${isFading ? 'fade-out' : ''}`}>
      {text}
    </div>
  )
}
