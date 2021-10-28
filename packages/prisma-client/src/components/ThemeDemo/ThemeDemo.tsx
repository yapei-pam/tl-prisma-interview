import styled, { ThemeProvider } from 'styled-components'
import { Grid } from '../../externals/material-ui'
import { ThemeHeader, ThemeStates, ThemePlayground } from "./components"
import { pick } from '../../externals/lodash'
import copyright from "./ThemeDemo.copyright.json"

const Root = styled.div`
    max-width: 80%;
    padding: 50px;
`

interface ThemeDemoProps {
    title: string
    description: string
    theme: any
    customisations: any,
    children: React.ReactNode
}

export const ThemeDemo = (props: ThemeDemoProps) => {
    const { title, description, children, theme, customisations } = props
    
    return (
        <ThemeProvider theme={theme}>
            <Root>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <ThemeHeader title={title} description={description} />
                    </Grid>
                    <Grid item xs={12}>
                        <ThemeStates states={copyright.states}>{children}</ThemeStates>
                    </Grid>
                    <Grid item xs={12}> 
                        <ThemePlayground 
                            customisations={pick(copyright.customisations, Object.keys(customisations))} 
                            defaultCustomisations={customisations}
                        >
                                {children}
                        </ThemePlayground>
                    </Grid>
                </Grid>
            </Root>
        </ThemeProvider>
    )
}