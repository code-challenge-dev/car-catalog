import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  btnType?: 'button' | 'submit'
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface searManufacturerProps {
  manufacturer?: string
  setManufacturer?: (manufacturer: string) => void
}
