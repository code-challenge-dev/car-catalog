'use client'

import Image from 'next/image'
import CustomButton from './CustomButton'
import { TypeAnimation } from 'react-type-animation'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/#discover')
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          <TypeAnimation
            sequence={[
              'Discover, reserve, or hire a car with speed and simplicity!',
              1000,
              'Discover, reserve, or hire a car with speed and efficiency!',
              1000,
              'Discover, reserve, or hire a car with speed and comfort!',
              1000,
            ]}
            wrapper="div"
            speed={40}
            cursor={false}
            className="h-[200px] sm:h-[300px] xl:h-[400px] "
            repeat={0}
          />
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experince with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white hover:bg-white hover:text-primary-blue duration-500 border border-2 border-primary-blue rounded-full mt-10"
          handleClick={handleClick}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="object-contain hover:scale-105 duration-500"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero
