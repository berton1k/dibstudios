import { animate, useInView, useMotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ value, suffix = '' }) {
  const reference = useRef(null)
  const isInView = useInView(reference, { once: true, amount: 0.45 })
  const motionValue = useMotionValue(0)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest))
    })

    return () => unsubscribe()
  }, [motionValue])

  useEffect(() => {
    if (!isInView) {
      return undefined
    }

    const controls = animate(motionValue, value, {
      duration: 1.7,
      ease: [0.16, 1, 0.3, 1],
    })

    return () => controls.stop()
  }, [isInView, motionValue, value])

  return (
    <span ref={reference}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
