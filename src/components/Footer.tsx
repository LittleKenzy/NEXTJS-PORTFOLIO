import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading text-center text-[40px] md:text-5xl lg:text-6xl font-bold'>Ready To Take <span> The Next <span className='text-purple-400'> Step</span> In Your <span className='text-purple-400'> Digital Journey</span>?</span></h1>

                <p className='text-white md:mt-10 my-5 text-center'>If you&apos;re ready to take the next step in your digital journey, let&apos;s connect.</p>

                <a href="mailto:bilal.alaudin.addaba2@gmail.com">
                    <MagicButton
                        title='Let&apos;s get in touch'
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>

            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright &copy; 2025 LittleKenzy. All rights reserved</p>

                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-slate-600'>
                            <img src={profile.img} alt={profile.img} width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>

        </footer>
    )
}

export default Footer