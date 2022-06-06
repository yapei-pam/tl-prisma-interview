import { useRef } from 'react';
import { useStates } from '@tl-prisma/components'
import { ThemeOneButton, default as themeOneStyles } from '@tl-prisma/theme-one'

interface TH1ButtonProps {
    label: string
}

export const TH1Button = (props: TH1ButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const { label, ...rest } = props;
    useStates({ ref: buttonRef })
    return (
        <ThemeOneButton
            label={label}
            ref={buttonRef}
            {...rest}
        />
    )
}

export const TH1Theme = { ...themeOneStyles }

export const TH1Customisations = {
    color: themeOneStyles.palette.white,
    bgColor: themeOneStyles.palette.azure,
    hoverBgColor: themeOneStyles.palette.cloudBurst
}