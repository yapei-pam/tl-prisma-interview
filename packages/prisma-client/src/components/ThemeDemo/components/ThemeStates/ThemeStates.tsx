import styled from 'styled-components'
import { Typography } from '../../../../externals/material-ui'
import { States, StatesModel } from "../../../States"

const Root = styled.div``

const Content = styled.div` 
    margin-top: 30px;
`

interface ThemeStatesProps {
  states: StatesModel
  children?: React.ReactNode
}

export const ThemeStates = (props: ThemeStatesProps) => {
    const { children, states }  = props

    return (
        <Root>
            <Typography gutterBottom variant="h6" component="div">
                States
            </Typography>
            <Typography variant="body2" color="text.secondary">
                States communicate the current status of the component to the user. They visually communicate whether something can be interacted with and how to interact with it. States should have distinct visual differences, making the current state known. Differences can include colour, style of the element or feedback like animation.

                You can find more information on how components use states in the types section of the component documentation.
            </Typography>
            <Content><States states={states}>{children}</States></Content>
        </Root>
    )
}