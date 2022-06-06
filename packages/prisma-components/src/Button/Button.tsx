import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import throttle from 'lodash/throttle'
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  active?: boolean
  variant?: 'theme1' | 'theme2'
  onClick?: (event?: React.MouseEvent) => void
  className?: string
  children?: React.ReactNode
  label?: string
  color?: string
  bgColor?: string
  hoverBgColor?: string
  theme?: any
}

export const BaseButton = styled.button<{
  disabled?: boolean
  active?: boolean
  variant?: 'theme1' | 'theme2'
  color?: string
  bgColor?: string
  hoverBgColor?: string
  theme?: any
}>`
  ${({ disabled }) => disabled && `
        cursor: default;
        background: red;
  `};

  /* variants */
  ${(props) => {
    const { variant, theme, color, bgColor, hoverBgColor } = props
    if (variant === 'theme1' || !variant) {
      return `
        color: ${theme.palette.white};
        background-color: ${theme.palette.azure};
        font-family: ${theme.typography.fontFamily.default};
        font-size: ${theme.typography.fontSize.md};
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        cursor: pointer;
        border-radius: ${theme.visuals.borderRadius.normal};

        &:enabled {
          color: ${color || theme.palette.white};
          background-color: ${bgColor || theme.palette.azure};
          border: none;
          opacity: ${theme.visuals.opacity.normal};
        }

        &:hover, &.sim-hover {
          color: ${theme.palette.white};
          background-color: ${hoverBgColor || theme.palette.cloudBurst};
          border: none;
          opacity: ${theme.visuals.opacity.normal};
        }

        &:focus, &.sim-focus {
          color: ${theme.palette.white};
          background-color: ${theme.palette.cloudBurst};
          border: none;
          opacity: ${theme.visuals.opacity.normal};
        }

        &[disabled], &.sim-disabled  {
          color: ${color || theme.palette.white};
          background-color: ${bgColor || theme.palette.azure};
          border: none;
          opacity: ${theme.visuals.opacity.disabled};
          cursor: default;
        }
      `
    }

    if (variant === 'theme2') {
      return `
        color: ${theme.palette.sun};
        background-color: ${theme.palette.white};
        font-family: ${theme.typography.fontFamily.default};
        font-size: ${theme.typography.fontSize.md};
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        cursor: pointer;
        border-radius: ${theme.visuals.borderRadius.normal};

        &:enabled {
          color: ${color || theme.palette.sun};
          background-color: ${theme.palette.white};
          border: 1px solid ${color || theme.palette.sun};
          opacity: ${theme.visuals.opacity.normal};
        }

        &:hover, &.sim-hover {
          color: ${theme.palette.white};
          background-color: ${color || theme.palette.sun};
          border: 1px solid ${color || theme.palette.sun};
          opacity: ${theme.visuals.opacity.normal};
        }

        &:focus, &.sim-focus {
          color: ${theme.palette.white};
          background-color: ${color || theme.palette.sun};
          border: 1px solid ${color || theme.palette.sun};
          opacity: ${theme.visuals.opacity.normal};
        }

        &[disabled], &.sim-disabled  {
          color: ${color || theme.palette.sun};
          background-color: ${theme.palette.white};
          border: 1px solid ${color || theme.palette.sun};
          opacity: ${theme.visuals.opacity.disabled};
          cursor: default;
        }
      `
    }

    return `
      &:disabled {
        color: ${color || theme.palette.white};
        background-color: ${bgColor || theme.palette.azure};
        border: none;
        opacity: ${theme.visuals.opacity.disabled};
        cursor: default;
      }
      border-radius: ${theme.visuals.borderRadius.normal};
      user-select: none;
      font-weight: normal;
      text-align: center;
      cursor: pointer;
      vertical-align: middle;
      max-width: 30rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: relative;
      color: ${theme.palette.white};
      background-color: ${theme.palette.azure};

    `
  }}

`
const CLICK_THROTTLE_TIME = 500

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, children, disabled, onClick = () => null, ...rest }, ref) => {
    const [pending, setPending] = useState(false)
    const throttledClick = useCallback(
      throttle<(event: React.MouseEvent) => Promise<void>>(
        (event) => {
          return Promise.resolve(onClick(event))
        },
        CLICK_THROTTLE_TIME,
        { trailing: false }
      ),
      [onClick]
    )

    const handleClick = (event: React.MouseEvent) => {
      setPending(true)
      return throttledClick(event)?.then(() => setPending(false))
    }

    return (
      <BaseButton
        onClick={handleClick}
        disabled={disabled || pending}
        aria-label={`button-${label}`}
        ref={ref}
        {...rest}
      >
        {label && label}
      </BaseButton>
    )
  }
)

export default Button
