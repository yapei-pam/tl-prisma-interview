import React from 'react'
import { Button } from '@tl-prisma/components'

interface ThemeOneButtonProps {
  color?: string
  bgColor?: string
  hoverBgColor?: string
  disabled?: boolean
  label: string
}

const ThemeOneButton = React.forwardRef<HTMLButtonElement, ThemeOneButtonProps>(
  (props, ref) => {
    const { color, bgColor, hoverBgColor, ...rest } = props
    return (
      <Button
        color={color}
        bgColor={bgColor}
        hoverBgColor={hoverBgColor}
        variant="theme1"
        ref={ref}
        {...rest}
      />
    )
  }
)

export default ThemeOneButton

