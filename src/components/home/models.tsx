"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ModelCard } from "../model"
import { Button } from "../ui/button"
import { slides } from "@/lib/slides"
import { useIsMobile } from "@/hooks/use-mobile"
import { useIsTablet } from "@/hooks/use-tablet"


export const ModelCarousel = () => {
  const [current, setCurrent] = useState(0)
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const translateValue = isMobile
    ? current * 105
    : isTablet
      ? current * 70
      : current * 60;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative pl-4 md:pl-6 lg:pl-10 w-full overflow-hidden">
      <div
        className="flex gap-8 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${translateValue}%)` }}
      >
        {slides.map((m, i) => (
            <ModelCard model={m} key={i} />
        ))}
      </div>
      <div className="py-6 grid grid-cols-3" >
        <div>

        </div>
        <div className=" flex space-x-2 justify-center">
            {slides.map((_, i) => (
            <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition ${
                i === current ? "bg-black dark:bg-white" : "bg-gray-400 dark:bg-zinc-800"
                }`}
            />
            ))}
        </div>
        <div className="space-x-4 flex justify-end items-center px-4 md:px-10" >
            <Button onClick={prevSlide} size={'icon'} variant={'secondary'} className="rounded-full" >
                <ChevronLeft/>
            </Button>
            <Button onClick={nextSlide} size={'icon'} variant={'secondary'} className="rounded-full" >
                <ChevronRight/>
            </Button>
        </div>
      </div>
    </div>
  )
}
