import styled from 'styled-components'
import { space, width, fontSize, color, justifyContent, alignItems, textAlign, zIndex, background, position, bottom, right, flexDirection, height, backgroundColor, borderRadius, padding, display, border, paddingTop, overflow, } from 'styled-system'

const Flex = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${alignItems}
  ${justifyContent}
  ${textAlign}
  ${zIndex}
  background-color: ${props => props.backgroundColor};
   ${position}
   ${bottom}
   ${right}
   ${flexDirection}
   ${height}
   ${width}
   ${border}
   ${alignItems}
   display: ${props => Boolean(props.display) === true ? props.display : "flex"};
   cursor: ${props => props.cursor};
   padding-top: ${props => props.paddingTop || props.pt};
   padding-bottom: ${props => props.paddingBottom || props.pb};
   backdrop-filter: ${props => props.backdropFilter};
   overflow: ${props => props.overflow};
   margin-bottom: ${props => props.marginBottom || props.mb};
   margin-top: ${props => props.marginTop || props.mt};
   margin-right: ${props => props.marginRight || props.mr};
   margin-left: ${props => props.marginLeft || props.ml};
`

const Button = styled.button`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  background-color: ${props => props.backgroundColor};
  ${zIndex}
  ${position}
  ${borderRadius}
  ${right}
  ${bottom}
  ${height}
  ${padding}
  ${border}
  ${display}
`;

export { Flex, Button }
