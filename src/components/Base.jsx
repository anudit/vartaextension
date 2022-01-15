import React from 'react';
import styled from 'styled-components'
import { variant, shadow, position, border, background, typography, flexbox, layout, space, width, fontSize, color, justifyContent, alignItems, textAlign, zIndex, bottom, right, flexDirection, height, backgroundColor, borderRadius, padding, display, paddingTop, overflow } from 'styled-system'

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
  margin: 0px;
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
    width: ${props => Boolean(props.width) === true ? props.width : "100%"};
    padding: 3px;
    margin-top: 4px;
    margin-bottom: 4px;
    border-radius: 5px;
    border: none;
    height: 30px;
`;

const IconButton = styled.button({
  width: "40px !important",
  height: "40px !important",
  minWidth: "40px !important",
  minHeight: "40px !important",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100px",
  border: "none"
});

const NeuInput = styled.input({
  height: props => Boolean(props?.height) === true ? props.height : "40px",
  margin: props => Boolean(props?.margin) === true ? props.margin : "0px",
  color: (props) => props.theme.colors.text,
  backgroundColor: (props) => props.theme.colors.primary,
  boxShadow: "inset 2px -10px 13px rgb(0 0 0 / 15%), inset 0px 12px 45px rgb(0 0 0 / 21%)",
  width: "100%",
  borderRadius: "100px",
  border: "none",
  paddingLeft: "10px",
  paddingRight: "10px",
  "&:active": {
    border: "none",
  }
})

const NeuIconButton = styled(IconButton)(
  {
    boxShadow: (props) => `${props.theme.colors.primary} 4px 4px 22px 0px, ${props.theme.colors.primary} -4px -4px 22px 0px`,
    background: (props) => props.isSelected === true ? props.theme.colors.accent : props.theme.colors.secondary,
    "&:active": {
      background: "linear-gradient(145deg, #171717, #272727)",
      boxShadow: "inset 30.03px 30.03px 100px #191919, inset -30.03px -30.03px 100px #252525",
    }
  }
);

const NeuButton = styled(Button)(
  {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: "100px",
    boxShadow: "rgb(21, 21, 24) 11px 11px 22px 0px, rgb(36, 37, 41) -11px -11px 22px 0px",
    background: (props) => props.theme.colors.primaryG,
    border: "none",
    color: (props) => props.theme.colors.text,
    "&:hover": {
      boxShadow: "rgb(21, 21, 24) 24px 24px 48px 0px, rgb(36, 37, 41) -24px -24px 48px 0px",
    },
    "&:active": {
      background: "linear-gradient(145deg, #171717, #272727)",
      boxShadow: "inset 30.03px 30.03px 100px #191919, inset -30.03px -30.03px 100px #252525"
    }
  },
  variant({
    variants: {
      accent: {
        background: (props) => props.theme.colors.accent,
      },
      danger: {
        color: "white",
        boxShadow: "rgb(180 91 104) 3px 3px 12px 0px, rgb(186 90 103) -1px -1px 22px 0px",
        background: "linear-gradient(180deg, #ed213a, #93291e)",
      },
      success: {
        color: "white",
        boxShadow: "rgb(180 91 104) 3px 3px 12px 0px, rgb(186 90 103) -1px -1px 22px 0px",
        background: "linear-gradient(180deg, #56ab2f, #a8e063)",
      },
    }
  })
);

export { Text, Flex, Button, IconButton, NeuIconButton, NeuButton, Input, NeuInput }
