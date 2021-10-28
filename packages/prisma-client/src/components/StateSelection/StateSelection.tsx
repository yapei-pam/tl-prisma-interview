import * as React from 'react'
import { RadioGroup, FormControl, FormControlLabel, Radio } from '../../externals/material-ui'

interface StateSelectionProps {
    value: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
}

export const StateSelection = (props: StateSelectionProps) => {
    const { value, onChange } = props
    return (
        <FormControl component="fieldset" sx={{ width: '100%' }}>
            <RadioGroup
                name="states-group"
                value={value}
                onChange={onChange}
            >
                <FormControlLabel value="enabled" control={<Radio size='small' />} label="Enabled"  />
                <FormControlLabel value="hover" control={<Radio size='small' />} label="Hover" />
                <FormControlLabel value="focus" control={<Radio size='small' />} label="Focus" />
                <FormControlLabel value="disabled" control={<Radio size='small' />} label="Disable" />
            </RadioGroup>
        </FormControl>
    )
}