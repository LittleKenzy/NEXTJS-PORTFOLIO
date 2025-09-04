import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils/cn'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-20'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black absolute top-0 left-0">
        <div
          className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h1 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic web magic with next. js</h1>

          <TextGenerateEffect words='Transforming your ideas into captivating web experiences' className='text-center text-[40px] md:text-5xl lg:text-6xl'/>

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, I&apos;m <span className='text-blue-200'>Little Kenzy</span> a web developer from <span className='text-blue-200'>Indonesian</span>.</p>

          <a href="#about">
            <MagicButton title='Show my work' icon={<FaLocationArrow />} position='right'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero