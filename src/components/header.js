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
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 2%;
      max-width: 100%;
      background: url('http://impexa.biz/wp-content/uploads/2017/05/corn-698195_1920-830x555-150x150.jpg') fixed;
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
    `
    return (
      <Wrapper>
      <Layer />
        <ImgHeader src='./assets/img/logo2.png'></ImgHeader>
        <LT className="site-title" style={{zIndex:'3'}}>Impexa</LT>
      </Wrapper>
    )
  }
}
