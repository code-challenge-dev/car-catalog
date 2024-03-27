'use client'

import { CarProps } from '@/types'
import { calculateCarRent, generateCarImageUrl } from '@/utils'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { useEffect, useState } from 'react'
import CarDetails from './CarDetails'

interface FetchedCarsProps {
  car: CarProps
}

const CarCard = ({ car }: FetchedCarsProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car

  const [isOpen, setIsOpen] = useState(false)
  const [imageKey, setImageKey] = useState(Date.now())

  useEffect(() => {
    setImageKey(Date.now())
  }, [car])
  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-16 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          key={imageKey}
          fill
          priority
          alt="Car Model"
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={'/steering-wheel.svg'}
              width={20}
              height={20}
              priority
              alt="streering wheel"
            />
            <p className="text-[14px]">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={'/tire.svg'} width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={'/gas.svg'} width={20} height={20} alt="city_mpg" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue hover:bg-gray-500 duration-200 hover:text-primary-blue"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  )
}

export default CarCard
