import { StatesContext } from '../../externals/prisma-components'
import { Grid } from "../../externals/material-ui"
import { State } from "../State"

interface StatesProps {
    states: any
    children: React.ReactNode
}

export const States = (props: StatesProps) => {
    const { states, children } = props

    const renderState = (key: string) => {
        const state = states[key]
        return (
            <Grid item xs={12} md={5}>
                <StatesContext.Provider value={{ state: key }}>
                    <State 
                        title={state.title}
                        description={state.description}
                    >
                        {children}
                    </State>
                </StatesContext.Provider>
            </Grid>
        )
    }

    return (
        <Grid container spacing={5} alignItems='stretch' alignContent='stretch'>
            {Object.keys(states).map(renderState)}
        </Grid>
    )
}