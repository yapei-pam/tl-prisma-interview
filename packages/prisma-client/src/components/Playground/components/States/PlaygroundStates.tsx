import * as React from 'react'
import styled from 'styled-components'
import { Typography } from '../../../../externals/material-ui'
import { StateSelection } from "../../../StateSelection" 

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

interface PlaygroundStatesProps {
    value: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
}

export const PlaygroundStates = (props: PlaygroundStatesProps) => {
    const { onChange, value } = props

    return (
        <Root>
            <Typography variant='h6' align='left'>States</Typography>
            <StateSelection value={value} onChange={onChange} />
        </Root>
    )
}