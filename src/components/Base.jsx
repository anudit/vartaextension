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

const IconButton = styled.button`
    min-width: 40px !important;
    height: 40px !important;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    border:none;
`;

const NeuIconButton = styled(IconButton)`
    box-shadow: rgb(21, 21, 24) 11px 11px 22px 0px, rgb(36, 37, 41) -11px -11px 22px 0px;
    background: linear-gradient(180deg , #332F2F, #221F1F);
    &:hover {
      box-shadow: rgb(21, 21, 24) 24px 24px 48px 0px, rgb(36, 37, 41) -24px -24px 48px 0px;
    }
    &:active {
      background: linear-gradient(145deg, #171717, #272727);
      box-shadow: inset 30.03px 30.03px 100px #191919, inset -30.03px -30.03px 100px #252525;
    }
`;

const NeuButton = styled(Button)`
    align-items: center;
    justify-content: center;
    display:flex;
    border-radius: 100px;
    box-shadow: rgb(21, 21, 24) 11px 11px 22px 0px, rgb(36, 37, 41) -11px -11px 22px 0px;
    background: linear-gradient(180deg , #332F2F, #221F1F);
    &:hover {
      box-shadow: rgb(21, 21, 24) 24px 24px 48px 0px, rgb(36, 37, 41) -24px -24px 48px 0px;
    };
    &:active {
      background: linear-gradient(145deg, #171717, #272727);
      box-shadow: inset 30.03px 30.03px 100px #191919, inset -30.03px -30.03px 100px #252525;
    };
    border:none;
    color: ${props => props.theme.colors.text};
`;

export { Text, Flex, Button, IconButton, NeuIconButton, NeuButton, Input }
