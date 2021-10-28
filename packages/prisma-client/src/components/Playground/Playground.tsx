import * as React from 'react'
import styled from 'styled-components'
import { Paper, Grid } from '../../externals/material-ui'
import { StatesContext } from '../../hooks/useStates'
import { PlaygroundCustomisations, PlaygroundStates } from "./components"

const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-left: 1px solid #EFF3F6;
`

interface PlaygroundProps {
  customisations?: any
  defaultCustomisations: any
  children?: React.ReactNode
}

export const Playground = (props: PlaygroundProps) => {
    const { children, defaultCustomisations, customisations: customisationsProps = [] } = props

    const [state, setState] = React.useState('enabled')
    const [customisations, setCustomisations] = React.useState({})

    const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
      setState(value)
    }

    const handleCustomisationChange = (id: string, value: string) => {
      setCustomisations({ ...customisations, [id]: value })
    }

    const renderPreview = () => {
      return React.Children.toArray(children).map((child: any, index: number) => (
        <Preview key={`preview-${index + 1}`} style={{ margin: '5px',  }}>
          {React.cloneElement(child, {
            className: `sim-${state}`,
            ...customisations,
          })}
        </Preview>
      ))
    }

    return (
      <StatesContext.Provider value={{ state, playground: true }}>
        <Paper sx={{ padding: '16px' }}>
          <Grid container>
            <Grid item sm={3}>
              <PlaygroundStates value={state}  onChange={handleStateChange} />
            </Grid>
            <Grid item sm={3}>
              <PlaygroundCustomisations 
                value={{ ...defaultCustomisations, ...customisations }}
                customisations={customisationsProps} 
                onChange={handleCustomisationChange} 
              />
            </Grid>
            <Grid item sm={6}>{renderPreview()}</Grid>
          </Grid>
        </Paper>
      </StatesContext.Provider>
    )
}