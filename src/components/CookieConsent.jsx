'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consentValue = localStorage.getItem('npaw-cookie-consent');
    if (consentValue !== 'true') {
      setShowConsent(true);
    }
  }, []);

  const handleClick = () => {
    localStorage.setItem('npaw-cookie-consent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="bg-white max-w-lg shadow-2xl fixed bottom-20 right-10 rounded-md p-5 flex flex-col border border-gray-300">
      <h3 className="text-lg font-bold">We value your privacy</h3>
      <p className="text-sm mr-10 mt-2">
        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking “I understand“, you consent to our use of cookies.{' '}
        <Link target="_blank" href="/cookie-policy">
          <span className="font-bold text-[#06b6d4]">Read More.</span>
        </Link>
      </p>
      <button className="bg-[#06b6d4] text-white py-2 px-4 rounded-md mt-3 self-center" onClick={handleClick}>
        I understand
      </button>
    </div>
  );
}