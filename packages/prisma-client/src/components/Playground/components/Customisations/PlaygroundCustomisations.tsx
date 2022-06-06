import styled from 'styled-components'
import { ColorPicker } from '../../../ColorPicker'
import { Typography } from '../../../../externals/material-ui'

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

interface PlaygroundCustomisationsProps {
    value: any
    customisations: any
    onChange?: (id: string, value: string) => void
}

export const PlaygroundCustomisations = (props: PlaygroundCustomisationsProps) => {
    const { onChange, customisations, value = {} } = props

    const renderCustomisation = (key: string) => {
        const customisation = customisations[key]
        return <ColorPicker key={key} id={key} label={customisation.title} onChange={onChange} value={value[key]} />
    }

    const renderCustomisations = () => {
        const keys = Object.keys(customisations)
        if (keys.length === 0) {
            return <div>Plug your customisations here</div>
        }

        return keys.map(renderCustomisation)
    }

    return (
        <Root>
            <Typography variant='h6' align='left'>Customisations</Typography>
            {renderCustomisations()}
        </Root>
    )
}