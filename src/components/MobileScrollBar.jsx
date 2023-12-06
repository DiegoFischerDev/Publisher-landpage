'use client'

import React, { useState, useEffect } from 'react'

export function MobileScrollBar({width}) {
  const [isMobile, setIsMobile] = useState(true)

  console.log(width)

  const checkIsMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent,
    )
  }

  useEffect(() => {
    setIsMobile(checkIsMobile())
  }, [])

 if (isMobile) return (
    <>
      <div style={{width: `${width}px`}} className={`absolute bottom-0 left-0 z-10 h-3 bg-[#06b6d4]`}></div>
      <div className="absolute bottom-1 left-2 z-20 block h-1 w-[100px] rounded-full bg-gray-100 sm:hidden"></div>
    </>
  )
}
