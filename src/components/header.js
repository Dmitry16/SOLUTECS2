import React from 'react'
import styled from 'styled-components'

import MainNav from './nav'
import { WrapperMax1100 } from './styled/wrappers'

import { media } from './styled/medias'
import { LT } from  './styled/titles'

export default class HeaderLarge extends React.Component {
  constructor() {
    super()
  }

  render() {
    const Wrapper = styled.div`
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 2% 0 0;
      max-width: 100%;
      background: black url('../assets/img/head1.jpg') no-repeat center;
      height: auto;
      > p, h1 {
        cursor: pointer;
        font-size: 3.5em; padding: 0; margin: 0;
        color: ${ props => props.theme.headerTextColor || 'coral' }
        }
      > p:hover { color: ${ props => props.theme.headerHoverTextColor || 'coral' }; }
      ${ media.desktop`height: auto;
        > p, h1 {
          font-size: 3em; padding: 0; margin: 0;
        }`};
      ${ media.tablet`height: auto;
        > p, h1 {
          font-size: 2em; padding: 0; margin: 0;
        }`};
      ${ media.handheld`height: auto;
        > p, h1 {
          font-size: 1.7em; padding: 0; margin: 0;
        }`};
      ${ media.tiny`height: auto;
        > h1 {
          font-size: 1.5em; line-height: 1.2em; padding-top: 0; margin: 0;
        }`};
    `
    const Layer = styled.div`
      margin: 0;
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background: ${ props => props.theme.layer };
    `
    const ImgHeader = styled.img`
      z-index: 3;
      width: 65px;
    `
    return (
      <Wrapper>
      <Layer />
        <ImgHeader src='./assets/img/logo2.png'></ImgHeader>
        <LT className="site-title" style={{zIndex:'3'}}>Impexa</LT>
        <WrapperMax1100 style={{zIndex:'3',margin:'2% 0 0'}}>
          <MainNav />
        </WrapperMax1100>
      </Wrapper>
    )
  }
}
