'use client'

import { useState, useEffect, useRef } from 'react'

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('fr')
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ]

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('behype_language') || 'fr'
    setCurrentLang(savedLang)

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode)
    localStorage.setItem('behype_language', langCode)
    setIsOpen(false)

    // Dispatch custom event for language change
    window.dispatchEvent(new CustomEvent('languageChange', { detail: langCode }))
  }

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLang) || languages[0]
  }

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        className="language-selector-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <span className="language-flag">{getCurrentLanguage().flag}</span>
        <span className="language-code">{currentLang.toUpperCase()}</span>
        <svg
          className={`language-arrow ${isOpen ? 'open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${currentLang === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="language-flag">{lang.flag}</span>
              <span className="language-name">{lang.name}</span>
              {currentLang === lang.code && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8L6.5 11.5L13 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .language-selector {
          position: relative;
          display: inline-flex;
          margin-left: 12px;
        }

        .language-selector-button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: white;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        .language-selector-button:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .language-flag {
          font-size: 18px;
          line-height: 1;
        }

        .language-code {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .language-arrow {
          transition: transform 0.2s ease;
          color: rgba(255, 255, 255, 0.6);
        }

        .language-arrow.open {
          transform: rotate(180deg);
        }

        .language-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 180px;
          background: #1a1a1a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          padding: 8px;
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .language-option {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          background: transparent;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        .language-option:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .language-option.active {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .language-name {
          flex: 1;
          text-align: left;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .language-selector {
            margin-left: 0;
            margin-top: 12px;
          }

          .language-selector-button {
            width: 100%;
            justify-content: center;
          }

          .language-dropdown {
            right: auto;
            left: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
