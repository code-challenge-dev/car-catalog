import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  btnType?: 'button' | 'submit'
  handleClick?: MouseEventHandler<HTMLButtonElement>
  rightIcon?: string
  textStyles?: string
  isDisabled?: boolean
}

export interface searManufacturerProps {
  manufacturer?: string
  setManufacturer?: (manufacturer: string) => void
}

export interface CarProps {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export interface CarDetailsProps {
  isOpen: boolean
  closeModal: () => void
  car: CarProps
}
