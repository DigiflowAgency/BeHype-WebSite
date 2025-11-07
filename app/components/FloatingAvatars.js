'use client'

import { useEffect, useRef } from 'react'

export default function FloatingAvatars() {
  const avatarsRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      }
    }

    const animate = () => {
      avatarsRef.current.forEach((avatar, index) => {
        if (!avatar) return

        const speed = 0.03 + (index * 0.01)
        const multiplier = 40 + (index * 15)

        const currentTransform = avatar.style.transform || 'translate(0px, 0px)'
        const matches = currentTransform.match(/translate\(([^,]+),\s*([^)]+)\)/)

        let currentX = 0
        let currentY = 0

        if (matches) {
          currentX = parseFloat(matches[1])
          currentY = parseFloat(matches[2])
        }

        const targetX = mouseRef.current.x * multiplier * (index % 2 === 0 ? 1 : -1)
        const targetY = mouseRef.current.y * multiplier * (index % 2 === 0 ? -1 : 1)

        const newX = currentX + (targetX - currentX) * speed
        const newY = currentY + (targetY - currentY) * speed

        avatar.style.transform = `translate(${newX}px, ${newY}px) scale(${1 + Math.abs(mouseRef.current.x) * 0.05})`
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    frameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const avatars = [
    {
      src: '/images/EMILIE.jpeg',
      name: 'Emilie',
      className: 'avatar-1'
    },
    {
      src: '/images/downloadgram.org_467456076_18259712422252491_8445036074561393020_n_1.avif',
      name: 'Dounia',
      className: 'avatar-2'
    },
    {
      src: '/images/ADEL.webp',
      name: 'Adel',
      className: 'avatar-3'
    },
    {
      src: '/images/emma-aou_1.avif',
      name: 'Emma',
      className: 'avatar-4'
    }
  ]

  return (
    <div className="floating-avatars-container">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          ref={el => avatarsRef.current[index] = el}
          className={`floating-avatar ${avatar.className}`}
          style={{
            willChange: 'transform',
            transition: 'filter 0.3s ease'
          }}
        >
          <div className="avatar-wrapper">
            <img
              src={avatar.src}
              alt={avatar.name}
              loading="lazy"
            />
            <div className="avatar-glow"></div>
            <div className="avatar-dot"></div>
          </div>
        </div>
      ))}

      <style jsx>{`
        .floating-avatars-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-avatar {
          position: absolute;
          pointer-events: none;
        }

        .avatar-1 {
          top: 15%;
          left: 10%;
        }

        .avatar-2 {
          top: 25%;
          right: 15%;
        }

        .avatar-3 {
          bottom: 30%;
          left: 15%;
        }

        .avatar-4 {
          bottom: 20%;
          right: 12%;
        }

        .avatar-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow:
            0 10px 40px rgba(36, 101, 247, 0.3),
            0 0 0 3px rgba(255, 255, 255, 0.9),
            0 0 0 6px rgba(36, 101, 247, 0.2);
          transition: box-shadow 0.3s ease;
        }

        .avatar-wrapper:hover {
          box-shadow:
            0 15px 60px rgba(36, 101, 247, 0.5),
            0 0 0 3px rgba(255, 255, 255, 1),
            0 0 0 6px rgba(36, 101, 247, 0.4);
        }

        .avatar-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(36, 101, 247, 0.3) 0%, transparent 70%);
          animation: pulse 3s ease-in-out infinite;
        }

        .avatar-dot {
          position: absolute;
          bottom: 5px;
          right: 5px;
          width: 14px;
          height: 14px;
          background: #00ff87;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 10px rgba(0, 255, 135, 0.5);
          animation: dotPulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(0, 255, 135, 0.5);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 20px rgba(0, 255, 135, 0.8);
          }
        }

        @media (max-width: 768px) {
          .avatar-wrapper {
            width: 60px;
            height: 60px;
          }

          .avatar-dot {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  )
}
