import { useRef } from 'react';
import { useStates } from '@tl-prisma/components'
import { ThemeTwoButton, default as themeTwoStyles } from '@tl-prisma/theme-two'

interface TH2ButtonProps {
    label: string
}

export const TH2Button = (props: TH2ButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const { label, ...rest } = props;
    useStates({ ref: buttonRef })
    return (
      <ThemeTwoButton
        label={label}
        ref={buttonRef}
        {...rest}
      />
    )
}

export const TH2Theme = {
    ...themeTwoStyles
}

export const TH2Customisations = {
    color: themeTwoStyles.palette.sun,
}