'use client'

import { useEffect, useRef, useState } from 'react'

export default function MagneticAvatars() {
  const avatarsRef = useRef([])
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const targetRef = useRef([])
  const currentRef = useRef([])
  const frameRef = useRef(null)

  const avatars = [
    {
      src: '/images/EMILIE.jpeg',
      name: 'Emilie',
      username: '@emilie_food',
      followers: '45K',
      position: { x: 10, y: 15 }
    },
    {
      src: '/images/downloadgram.org_467456076_18259712422252491_8445036074561393020_n_1.avif',
      name: 'Dounia',
      username: '@dounia_kmr',
      followers: '13.2K',
      position: { x: 85, y: 25 }
    },
    {
      src: '/images/ADEL.webp',
      name: 'Adel',
      username: '@adel_eats',
      followers: '28K',
      position: { x: 12, y: 65 }
    },
    {
      src: '/images/emma-aou_1.avif',
      name: 'Emma',
      username: '@emma_aou',
      followers: '10.5K',
      position: { x: 88, y: 70 }
    }
  ]

  useEffect(() => {
    // Init positions
    avatars.forEach((_, i) => {
      targetRef.current[i] = { x: 0, y: 0 }
      currentRef.current[i] = { x: 0, y: 0 }
    })

    const handleMouseMove = (e) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      mouseRef.current = { x, y }
    }

    const animate = () => {
      avatarsRef.current.forEach((avatar, index) => {
        if (!avatar) return

        // Magnetic effect
        const strength = 60 + (index * 20)
        const ease = 0.08

        // Calculate target position based on mouse
        const deltaX = (mouseRef.current.x - 0.5) * strength
        const deltaY = (mouseRef.current.y - 0.5) * strength

        targetRef.current[index] = {
          x: deltaX * (index % 2 === 0 ? 1 : -1),
          y: deltaY * (index % 2 === 0 ? -1 : 1)
        }

        // Smooth interpolation
        currentRef.current[index].x += (targetRef.current[index].x - currentRef.current[index].x) * ease
        currentRef.current[index].y += (targetRef.current[index].y - currentRef.current[index].y) * ease

        // Apply transform
        const rotation = Math.sin(Date.now() * 0.001 + index) * 3
        const scale = 1 + Math.abs(currentRef.current[index].x + currentRef.current[index].y) * 0.001

        avatar.style.transform = `
          translate(${currentRef.current[index].x}px, ${currentRef.current[index].y}px)
          rotate(${rotation}deg)
          scale(${scale})
        `
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

  return (
    <div ref={containerRef} className="magnetic-avatars">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          ref={el => avatarsRef.current[index] = el}
          className="avatar-magnetic"
          style={{
            left: `${avatar.position.x}%`,
            top: `${avatar.position.y}%`,
            animationDelay: `${index * 0.2}s`
          }}
        >
          <div className="avatar-card">
            <div className="avatar-glow"></div>
            <div className="avatar-image-wrapper">
              <img src={avatar.src} alt={avatar.name} />
              <div className="avatar-shine"></div>
            </div>
            <div className="avatar-badge">
              <div className="badge-dot"></div>
              Online
            </div>
            <div className="avatar-info">
              <div className="avatar-name">{avatar.name}</div>
              <div className="avatar-username">{avatar.username}</div>
              <div className="avatar-followers">{avatar.followers}</div>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        .magnetic-avatars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .avatar-magnetic {
          position: absolute;
          will-change: transform;
          transition: filter 0.3s ease;
          animation: fadeIn 0.8s ease-out backwards;
        }

        .avatar-card {
          position: relative;
          width: 160px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 16px;
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .avatar-magnetic:hover .avatar-card {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(36, 101, 247, 0.4);
          box-shadow:
            0 30px 80px rgba(36, 101, 247, 0.3),
            0 0 0 1px rgba(36, 101, 247, 0.2);
          transform: scale(1.05);
        }

        .avatar-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(36, 101, 247, 0.2) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
        }

        .avatar-magnetic:hover .avatar-glow {
          opacity: 1;
        }

        .avatar-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .avatar-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .avatar-magnetic:hover .avatar-image-wrapper img {
          transform: scale(1.1);
        }

        .avatar-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shine 3s ease-in-out infinite;
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          50%, 100% {
            left: 100%;
          }
        }

        .avatar-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(0, 255, 135, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 255, 135, 0.3);
          border-radius: 100px;
          font-size: 10px;
          font-weight: 600;
          color: #00ff87;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #00ff87;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(0, 255, 135, 0.7);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 0 6px rgba(0, 255, 135, 0);
          }
        }

        .avatar-info {
          text-align: center;
        }

        .avatar-name {
          font-size: 14px;
          font-weight: 700;
          color: white;
          margin-bottom: 2px;
        }

        .avatar-username {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 6px;
        }

        .avatar-followers {
          font-size: 12px;
          font-weight: 600;
          background: linear-gradient(135deg, #2465f7, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 768px) {
          .avatar-card {
            width: 120px;
            padding: 12px;
          }

          .avatar-name {
            font-size: 12px;
          }

          .avatar-username {
            font-size: 10px;
          }

          .avatar-followers {
            font-size: 11px;
          }

          .avatar-badge {
            font-size: 9px;
            padding: 3px 8px;
          }
        }
      `}</style>
    </div>
  )
}
