import styled from 'styled-components'
import { Card, CardContent, Typography } from "../../externals/material-ui"

const CardPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-bottom: 1px solid #EFF3F6;
`

interface StateProps {
    title: string
    description: string
    children: React.ReactNode
}

export const State = (props: StateProps) => {
    const { children, title, description } = props
    return (
        <Card sx={{ height: '100%' }}>
          <CardPreview>{children}</CardPreview>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
    )
}