'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ModernNavbar() {
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
      <nav className="modern-nav">
        <div className="nav-container">
          <Link href="/" className="logo">
            BEHYPE
          </Link>

          <div className="nav-links">
            <Link href="/" className={isActive('/') ? 'nav-link active' : 'nav-link'}>
              Accueil
            </Link>
            <Link href="/testimonials" className={isActive('/testimonials') ? 'nav-link active' : 'nav-link'}>
              Témoignages
            </Link>
            <Link href="/influencer" className={isActive('/influencer') ? 'nav-link active' : 'nav-link'}>
              Influenceurs
            </Link>
            <Link href="/offres" className={isActive('/offres') ? 'nav-link active' : 'nav-link'}>
              Tarifs
            </Link>
          </div>

          <div className="nav-cta">
            <Link href="/calendly" className="btn-demo">
              Démo gratuite
            </Link>
            <Link href="/offres" className="btn-start">
              Commencer
            </Link>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .modern-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }

        .logo {
          font-size: 26px;
          font-weight: 900;
          background: linear-gradient(135deg, #2465f7 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          letter-spacing: -1px;
          transition: transform 0.2s;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 40px;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          color: #374151;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          position: relative;
          transition: color 0.2s;
          padding: 8px 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(135deg, #2465f7 0%, #00d4ff 100%);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          border-radius: 2px;
        }

        .nav-link:hover {
          color: #2465f7;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-link.active {
          color: #2465f7;
        }

        .nav-link.active::after {
          transform: scaleX(1);
        }

        .nav-cta {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-demo,
        .btn-start {
          padding: 12px 28px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-demo {
          color: #374151;
          background: white;
          border: 2px solid #e5e7eb;
        }

        .btn-demo:hover {
          background: #f9fafb;
          border-color: #2465f7;
          color: #2465f7;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(36, 101, 247, 0.15);
        }

        .btn-start {
          color: white;
          background: linear-gradient(135deg, #2465f7 0%, #1d4ed8 100%);
          border: 2px solid transparent;
          box-shadow: 0 2px 8px rgba(36, 101, 247, 0.25);
        }

        .btn-start:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(36, 101, 247, 0.4);
        }

        @media (max-width: 1024px) {
          .nav-container {
            padding: 16px 32px;
            gap: 32px;
          }

          .nav-links {
            gap: 28px;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 14px 24px;
            flex-wrap: wrap;
          }

          .nav-links {
            order: 3;
            width: 100%;
            justify-content: space-around;
            gap: 16px;
            margin-top: 12px;
          }

          .nav-link {
            font-size: 13px;
          }

          .btn-demo,
          .btn-start {
            padding: 10px 20px;
            font-size: 13px;
          }
        }
      `}</style>
    </>
  )
}
