import React from 'react'
import { Button } from '@tl-prisma/components'

interface ThemeTwoButtonProps {
  color?: string
  bgColor?: string
  hoverBgColor?: string
  disabled?: boolean
  label: string
}

const ThemeTwoButton = React.forwardRef<HTMLButtonElement, ThemeTwoButtonProps>(
  (props, ref) => {
    const { color, bgColor, hoverBgColor, ...rest } = props
    return (
      <Button
        color={color}
        bgColor={bgColor}
        hoverBgColor={hoverBgColor}
        variant="theme2"
        ref={ref}
        {...rest}
      />
    )
  }
)

export default ThemeTwoButton

