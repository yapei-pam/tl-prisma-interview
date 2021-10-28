import * as React from 'react'
import styled from 'styled-components'
import { Typography } from '../../../../externals/material-ui'
import { Playground } from '../../../Playground'

const Root = styled.div``

const Content = styled.div` 
    margin-top: 30px;
`

interface ThemePlaygroundProps {
    customisations: any    
    defaultCustomisations: any
    children: React.ReactNode
}

export const ThemePlayground = (props: ThemePlaygroundProps) => {
    const { defaultCustomisations, customisations, children } = props
    
    return (
        <Root>
            <Typography gutterBottom variant="h6" component="div">
                Playground
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Playground allows you to play with the properties/customisations in order to style the component the way you want.
            </Typography>
            <Content><Playground customisations={customisations} defaultCustomisations={defaultCustomisations}>{children}</Playground></Content>
        </Root>
    )
}