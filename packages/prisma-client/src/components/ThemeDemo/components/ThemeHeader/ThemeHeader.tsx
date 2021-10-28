import styled from 'styled-components'
import { Typography } from '../../../../externals/material-ui'

const Root = styled.div``

interface ThemeHeaderProps {
    title: string   
    description: string
}

export const ThemeHeader = (props: ThemeHeaderProps) => {
    const { title, description } = props
    return (
        <Root>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </Root>
    )
}