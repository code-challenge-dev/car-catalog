'use client'

import { CustomButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
  isDisabled,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled || false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            className="object-contain"
            fill
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton
