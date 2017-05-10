import React from 'react'
import styled from 'styled-components'
import { media } from './styled/medias'
import { LT } from  './styled/titles'

export default class HeaderLarge extends React.Component {
  constructor() {
    super()
  }

  render() {
    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 2%;
      max-width: 100%;
      background: ${ props => props.theme.headerBG || 'mediumseagreen' }
      height: 14em;
      > p, h1 {
        cursor: pointer;
        font-size: 4em; padding: 0; margin: 0;
        color: ${ props => props.theme.headerTextColor || 'coral' }
        }
      > p:hover { color: ${ props => props.theme.headerHoverTextColor || 'coral' }; }
      ${ media.desktop`height: 12em;
        > p, h1 {
          font-size: 4em; padding: 0; margin: 0;
        }`};
      ${ media.tablet`height: 9em;
        > p, h1 {
          font-size: 3em; padding: 0; margin: 0;
        }`};
      ${ media.handheld`height: 6em;
        > p, h1 {
          font-size: 1.7em; padding: 0; margin: 0;
        }`};
      ${ media.tiny`height: 6em;
        > h1 {
          font-size: 1.5em; line-height: 1.2em; padding-top: 0; margin: 0;
        }`};
    `
    const ImgHeader = styled.img`

    `
    return (
      <Wrapper>
        <ImgHeader src='./assets/img/logo2.png'></ImgHeader>
        <LT className="site-title">Impexa</LT>
      </Wrapper>
    )
  }
}
