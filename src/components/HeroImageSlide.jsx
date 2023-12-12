import React, { useEffect, useState, useRef } from 'react'

function HeroImageSlide() {
  const slides = [
    {
      url: `/assets/extension-1.png`,
    },
    {
      url: `/assets/extension-2.png`,
    },
    {
      url: `/assets/extension-3.png`,
    },
    {
      url: `/assets/extension-4.png`,
    },
    {
      url: `/assets/suite.png`,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const slideTimeout = useRef(null)

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    clearTimeout(slideTimeout.current)
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    slideTimeout.current = setTimeout(() => {
      nextSlide()
    }, 5000)
    return () => clearTimeout(slideTimeout.current)
  }, [currentIndex])

  return (
    <div className="overflow-hidden">
      <div className="relative m-auto w-full max-w-[700px] p-1 pb-0">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="h-0 w-full rounded-xl bg-cover bg-center bg-no-repeat pb-[74%] shadow-xl ring-1 ring-gray-900/10 duration-1000"
        ></div>
        <div className="relative" aria-hidden="true">
          <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-[#fafafa] pt-[8%]" />
        </div>
      </div>
      <div className="absolute -bottom-10 flex w-full justify-center py-2 pl-4">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={` mr-5 h-3 w-10 cursor-pointer rounded border border-gray-200 text-2xl duration-1000 ${
              slideIndex === currentIndex ? 'bg-[#262626]' : 'bg-white'
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default HeroImageSlide
