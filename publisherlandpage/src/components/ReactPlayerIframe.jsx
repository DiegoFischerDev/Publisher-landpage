'use client'
import ReactPlayer from 'react-player'
import React, { useEffect, useState } from 'react';

export default function ReactPlayerIframe({url}) {

    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    return (
      <div className="w-[90%] max-w-[630px] rounded-2xl overflow-hidden sm:border-2 sm:shadow">
          {isClient && (
            <ReactPlayer
              url={url}
              playing
              loop={true}
              controls={true}
              muted
              width={"100%"}
            />
          )}
      </div>
    )
}