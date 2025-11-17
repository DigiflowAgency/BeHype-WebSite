'use client'

import { useEffect } from 'react'
import HomeNavbar from '../components/HomeNavbar'
import Footer from '../components/Footer'

export default function Influencer() {
  useEffect(() => {
    document.title = "Page en refonte - BEHYPE"
  }, [])

  return (
    <div className="page">
      <HomeNavbar />

      <section className="refonte-section">
        <div className="refonte-container">
          <div className="refonte-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" opacity="0.2"/>
            </svg>
          </div>

          <h1 className="refonte-title">Page en refonte</h1>

          <p className="refonte-description">
            Nous travaillons actuellement sur une nouvelle version de cette page<br/>
            pour vous offrir une meilleure expérience.
          </p>

          <div className="refonte-cta">
            <a href="/" className="refonte-button">
              Retour à l'accueil
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        body {
          background: #000000;
        }
      `}</style>

      <style jsx>{`
        .page {
          background: #000000;
          color: #FAFAF9;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .refonte-section {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 24px 80px;
          min-height: calc(100vh - 200px);
        }

        .refonte-container {
          text-align: center;
          max-width: 600px;
        }

        .refonte-icon {
          margin: 0 auto 40px;
          width: 80px;
          height: 80px;
          color: #2960f6;
          animation: pulse-icon 3s ease-in-out infinite;
        }

        @keyframes pulse-icon {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        .refonte-title {
          font-size: 48px;
          font-weight: 700;
          margin: 0 0 24px 0;
          background: linear-gradient(135deg, #2960f6 0%, #4393f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .refonte-description {
          font-size: 18px;
          line-height: 1.7;
          color: #A3A3A3;
          margin: 0 0 48px 0;
        }

        .refonte-cta {
          display: flex;
          justify-content: center;
        }

        .refonte-button {
          display: inline-block;
          padding: 16px 40px;
          background: linear-gradient(135deg, #2960f6 0%, #4393f7 100%);
          color: #ffffff;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(41, 96, 246, 0.3);
        }

        .refonte-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(41, 96, 246, 0.4);
        }

        @media (max-width: 768px) {
          .refonte-title {
            font-size: 36px;
          }

          .refonte-description {
            font-size: 16px;
          }

          .refonte-icon {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </div>
  )
}
