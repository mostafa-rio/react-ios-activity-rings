import { useEffect, useRef } from "react"
import "./activity-rings.css"

export interface ActivityRingProps {
  /**
   * Progress values for each ring (0-1)
   */
  progress: [number, number, number]
  /**
   * Size of the activity rings in pixels
   */
  size?: number
  /**
   * Animation duration in seconds
   */
  animationDuration?: number
  /**
   * Background color
   */
  backgroundColor?: string
}

export default function ActivityRings({
  progress,
  size = 150,
  animationDuration = 1,
  backgroundColor = "#fff",
}: ActivityRingProps) {
  const ringsRef = useRef<HTMLDivElement>(null)

  // Ensure progress values are between 0 and 1
  const normalizedProgress = progress.map((p) => Math.min(Math.max(p, 0), 1))

  useEffect(() => {
    const rings = ringsRef.current
    if (!rings) return

    // Set animation duration CSS variable
    rings.style.setProperty("--animation-duration", `${animationDuration}s`)

    // Apply progress values to each ring
    const ringElements = rings.querySelectorAll(".activity-ring")
    ringElements.forEach((ring, index) => {
      const progressValue = normalizedProgress[index]
      const radius = 40 - index * 10
      const dashArray = 2 * Math.PI * radius
      const dashOffset = dashArray * (1 - progressValue)

      const circle = ring.querySelector("circle")
      if (circle) {
        circle.style.strokeDasharray = `${dashArray}`
        circle.style.strokeDashoffset = `${dashOffset}`
      }
    })
  }, [normalizedProgress, animationDuration])

  return (
    <div
      className="activity-rings-container"
      ref={ringsRef}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg viewBox="0 0 100 100" style={{ background: backgroundColor }}>
        <defs>
          {/* Gradient definitions for 3D effect */}
          <linearGradient id="outerRingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" className="outer-ring-gradient" />
            <stop offset="100%" className="outer-ring-gradient-dark" />
          </linearGradient>

          <linearGradient id="middleRingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" className="middle-ring-gradient" />
            <stop offset="100%" className="middle-ring-gradient-dark" />
          </linearGradient>

          <linearGradient id="innerRingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" className="inner-ring-gradient" />
            <stop offset="100%" className="inner-ring-gradient-dark" />
          </linearGradient>
        </defs>

        {/* Background rings */}
        <circle className="background-ring" cx="50" cy="50" r="40" />
        <circle className="background-ring" cx="50" cy="50" r="30" />
        <circle className="background-ring" cx="50" cy="50" r="20" />

        {/* Activity rings */}
        <g className="activity-ring outer-ring">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#outerRingGradient)"
            style={{
              strokeLinecap: "round",
              strokeDasharray: `${2 * Math.PI * 40}`,
              strokeDashoffset: `${2 * Math.PI * 40 * (1 - normalizedProgress[0])}`,
            }}
          />
        </g>
        <g className="activity-ring middle-ring">
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke="url(#middleRingGradient)"
            style={{
              strokeLinecap: "round",
              strokeDasharray: `${2 * Math.PI * 30}`,
              strokeDashoffset: `${2 * Math.PI * 30 * (1 - normalizedProgress[1])}`,
            }}
          />
        </g>
        <g className="activity-ring inner-ring">
          <circle
            cx="50"
            cy="50"
            r="20"
            stroke="url(#innerRingGradient)"
            style={{
              strokeLinecap: "round",
              strokeDasharray: `${2 * Math.PI * 20}`,
              strokeDashoffset: `${2 * Math.PI * 20 * (1 - normalizedProgress[2])}`,
            }}
          />
        </g>

        {/* Center black circle */}
        {/* <circle className="center-circle" cx="50" cy="50" r="7" /> */}
      </svg>
    </div>
  )
}
