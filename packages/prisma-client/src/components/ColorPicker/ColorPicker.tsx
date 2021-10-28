import * as React from 'react'
import { SketchPicker } from 'react-color'
import styled from 'styled-components'
import { Typography, Box, PaletteOutlined, IconButton } from '../../externals/material-ui'

const Popover = styled.div`
  position: absolute;
  z-index: 2;
`

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`

interface ColorPickerProps {
  id: string
  label: string
  value?: string
  onChange?: (key: string, value: string) => void
}

export const ColorPicker = (props: ColorPickerProps) => {
  const { id, label, value = '#FFFFFF' } = props

  const [open, setOpen] = React.useState(false)
  const [colour, setColour] = React.useState<string>(value)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleColorChange = (value: any) => {
    setColour(value.hex)

    if (props.onChange) {
      props.onChange(id, value.hex)
    }
  }

  const renderColorPicker = () => {
    if (!open) {
      return null
    }

    return (
      <Popover>
        <Cover onClick={handleClose} />
        <SketchPicker onChange={handleColorChange}  color={colour} />
      </Popover>
    )
  }

  return (
    <Box style={{ display: "flex", alignItems: "center", width: '100%' }}>
      <IconButton sx={{ marginRight: "10px" }} onClick={handleOpen}>
          <PaletteOutlined sx={{ backgroundColor: colour }}/>
      </IconButton>
      <Typography variant='body1'>{label}</Typography>
      {renderColorPicker()}
    </Box>
  )
}
