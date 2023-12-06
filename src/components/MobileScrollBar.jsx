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
    <div className=''>
      <div style={{width: `${width}px`}} className="h-3 flex items-center pl-1 bg-gray-200">
        <div className="block h-2 w-[100px] rounded-full bg-gray-100 sm:hidden"></div>
      </div>
      
    </div>
  )
}
