import styled from 'styled-components'
import { media } from './medias'
import { css } from 'styled-components'

export const Button = styled.button`
  padding: ${props => props.small ? '1em 2em' : '1.5em 8em'};
  border: ${ props => props.theme.buttonBorder };
  color: ${ props => props.theme.buttonTextColor };
  font-size: 1.2em;
  background: ${ props => props.theme.buttonBG };
  margin-top: 0;
  cursor: pointer;
  &:hover {
    background: ${ props => props.theme.buttonHoverBG };
    border: ${ props => props.theme.buttonHoverBorder };
    color: ${ props => props.theme.buttonHoverColor };
    box-shadow: 0 0 20px 3px #777;
  }
  ${ media.desktop`
    padding: ${props => props.small ? '0 0.5em' : '1.5em 7em'};
    font-size: 1em;
  `}
  ${ media.tablet`
    padding: ${props => props.small ? '0 0.5em' : '1.5em 6em'};
    font-size: 0.9em;
  `}
  ${ media.handheld`
    padding: ${props => props.small ? '0 0.5em' : '1em 4.5em'};
    font-size: 0.8em;
  `}
  `
