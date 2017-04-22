import styled from 'styled-components'
import { media } from './medias'
import { css } from 'styled-components'

export const Button = styled.button`
  padding: ${props => props.small ? '0 0.5em' : '1.5em 8em'};
  border: 2px solid #fff;
  color: #fff;
  font-size: 1.2em;
  background: steelblue;
  margin-top: 0;
  cursor: pointer;
  &:hover {
    background: lightblue;
    border: 2px solid darkviolet;
    color: darkviolet;
    box-shadow: 5px 5px 10px #777;
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
