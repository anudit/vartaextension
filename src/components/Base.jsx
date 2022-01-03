import React from 'react';
import styled from 'styled-components'
import { shadow, position, border, background, typography, flexbox, layout, space, width, fontSize, color, justifyContent, alignItems, textAlign, zIndex, bottom, right, flexDirection, height, backgroundColor, borderRadius, padding, display, paddingTop, overflow } from 'styled-system'

const Flex = styled.div`
  ${space}
  ${layout}
  ${flexbox}
  ${typography}
  ${shadow}
  ${typography}
  ${position}
  ${background}
  ${border}
  ${color}

  display: ${props => Boolean(props.display) === true ? props.display : "flex"};
  cursor: ${props => props.cursor};
  backdrop-filter: ${props => props.backdropFilter};
`

const Text = styled.p`
  ${space}
  ${layout}
  ${typography}
  ${shadow}
  ${typography}
  ${position}
  ${background}
  ${border}
  cursor: ${props => props.cursor};
  color: ${props => Boolean(props.color) === true ? props.color : props.theme.colors.text};
`

const Button = styled.button`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${zIndex}
  ${position}
  ${borderRadius}
  ${right}
  ${bottom}
  ${height}
  ${padding}
  ${border}
  ${display}
  ${alignItems}
  ${justifyContent}
  background-color: ${props => props.backgroundColor};
`;

const IconButton = styled.button`
    ${space}
    width: ${props => (props.size === "sm" ? "54" : "50")}px !important;
    height: ${props => (props.size === "sm" ? "40" : "50")}px !important;
    display:flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 100px;
    filter: ${props => (Boolean(props.filter) === true ? props.filter : "")};
    border:none;
    padding: ${props => (props.size === "sm" ? "4" : "8")}px !important;
`;

const Input = styled.input`
    ${space}
    width: ${props => Boolean(props.width) === true ? props.width : "100%"};
    padding: 3px;
    margin-top: 4px;
    margin-bottom: 4px;
    border-radius: 5px;
    border: none;
    height: 30px;
`;

export { Text, Flex, Button, IconButton, Input }
