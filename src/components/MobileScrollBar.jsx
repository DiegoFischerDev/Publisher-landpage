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
    <div className='absolute left-0 bottom-0'>
      <div style={{width: `${width}px`}} className="h-4 flex items-center pl-1 bg-[#fafafa] border border-l-0 border-solid border-gray-200">
        <div className="block h-2 w-[100px] rounded-full bg-[#c7c7c7] sm:hidden"></div>
      </div>
      
    </div>
  )
}
