'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path) => {
    if (path === '/testimonials') {
      return pathname === '/testimonials' || pathname === '/testimonials-new'
    }
    if (path === '/influencer') {
      return pathname === '/influencer'
    }
    return pathname === path
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/" className="navbar-logo">
            <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="800" fill="#2465f7">
                BEHYPE
              </text>
            </svg>
          </Link>

          <div className="navbar-menu">
            <Link
              href="/"
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            >
              Accueil
            </Link>
            <Link
              href="/offres"
              className={`navbar-link ${isActive('/offres') ? 'active' : ''}`}
            >
              Offres
            </Link>
            <Link
              href="/testimonials"
              className={`navbar-link ${isActive('/testimonials') ? 'active' : ''}`}
            >
              Témoignages
            </Link>
            <Link
              href="/influencer"
              className={`navbar-link ${isActive('/influencer') ? 'active' : ''}`}
            >
              Influenceurs
            </Link>
          </div>

          <div className="navbar-cta">
            <Link href="/calendly" className="btn-demo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Démo gratuite
            </Link>
            <Link href="/offres" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <line x1="19" y1="8" x2="19" y2="14"></line>
                <line x1="22" y1="11" x2="16" y2="11"></line>
              </svg>
              S'inscrire
            </Link>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .navbar-logo:hover {
          transform: scale(1.05);
        }

        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 36px;
          flex: 1;
          justify-content: center;
        }

        .navbar-link {
          position: relative;
          color: #1a1a1a;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          padding: 8px 0;
        }

        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(135deg, #2465f7, #00d4ff);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          border-radius: 2px;
        }

        .navbar-link:hover {
          color: #2465f7;
        }

        .navbar-link:hover::after {
          transform: scaleX(1);
        }

        .navbar-link.active {
          color: #2465f7;
        }

        .navbar-link.active::after {
          transform: scaleX(1);
        }

        .navbar-cta {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-demo,
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-demo {
          color: #1a1a1a;
          border: 2px solid #e5e7eb;
          background: white;
        }

        .btn-demo:hover {
          border-color: #2465f7;
          background: #f8faff;
          color: #2465f7;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(36, 101, 247, 0.15);
        }

        .btn-primary {
          background: linear-gradient(135deg, #2465f7 0%, #1a4fce 100%);
          color: white;
          border: 2px solid transparent;
          box-shadow: 0 4px 16px rgba(36, 101, 247, 0.25);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(36, 101, 247, 0.35);
        }

        @media (max-width: 1024px) {
          .navbar-container {
            padding: 14px 32px;
          }

          .navbar-menu {
            gap: 24px;
          }

          .navbar-link {
            font-size: 14px;
          }
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 12px 20px;
            flex-wrap: wrap;
          }

          .navbar-menu {
            order: 3;
            width: 100%;
            justify-content: space-around;
            gap: 16px;
            padding-top: 12px;
          }

          .navbar-link {
            font-size: 13px;
          }

          .btn-demo,
          .btn-primary {
            padding: 10px 18px;
            font-size: 13px;
          }

          .btn-demo svg,
          .btn-primary svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </>
  )
}
