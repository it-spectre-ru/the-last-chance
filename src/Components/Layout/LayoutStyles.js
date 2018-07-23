import React from 'react'
import styled from 'styled-components'

import { Grid, Col } from 'react-styled-flexboxgrid'
import { Colors, Metrics, Gradients } from 'Themes'

export const Column = ({ children, ...etc }) => <Col xs={12} {...etc}>{children}</Col>

export const ListTitle = styled.span`
  display: block;
  font-size: 1.2rem;
  color: #111;
  font-family: sans-serif;
`

export const ListItem = styled(Column)`
  padding: 2rem;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 1rem;
`

export const ListContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
`

export const RoundButton = styled.span`
  ${props => props.fullWidth ? `
    display: block;
    width: 100%;
  ` : `
    display: inline-block;
  `}
  padding: ${props => props.padding || Metrics.roundButton.padding};
  border-radius: ${props => props.borderRadius || Metrics.roundButton.borderRadius};
  cursor: ${props => !props.disabled && 'pointer'};
  box-sizing:border-box;
  text-transform: uppercase;
  font-weight: 600;
  ${props => props.gradient && !props.disabled ? `background-image: ${Gradients[props.gradient]};` : ''}
  ${props => props.disabled && `background-image: ${Gradients['grey']};`}
  border-color: ${props => props.border ? Colors.yellow : 'transparent'};
  font-size: ${props => props.fontSize || '1rem'};
  color: ${props => props.disabled ? 'rgba(255,255,255,0.5)' : props.color || '#fff'};
  transition: 0.4s cubic-bezier(0.68, -0.65, 0.365, 1.55);
  ${props => props.style ? props.style : ''}
  ${props => !props.disabled && `
    &:hover {
      box-shadow: inset 4px -0.3rem 5rem rgba(255,255,255,0.1);
      text-shadow: 1px 1px 0px rgba(0,0,0,0.15);
      ${props => props.border ? `
        background-color: ${Colors.yellow};
        color: ${Colors.darkestBlue};
      ` : `
        border-color: ${Colors.yellow}
      `}
    }
  `}
`
