import React from 'react'
import styled from 'styled-components'

import MainNav from './nav'
import { WrapperMax1100 } from './styled/wrappers'

import { media } from './styled/medias'
import { LT } from  './styled/titles'
import { flex } from './styled/flexes'

export default class HeaderLarge extends React.Component {

  render() {
    const Wrapper = styled.div`
      position: fixed;
      top: 0;
      z-index: 9;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      padding: 0; margin: 0;
      > a { margin: 0.5em 0 0 2em;}
      ${ media.tablet`height: auto;
        > img { margin: 0.5em 0 0; }
        > div > div { margin: 0.5em 0; width: 100%; }
      `};
      ${ media.handheld`height: auto;
        ${ flex.column }
        > a { margin: auto; }
        > a > img { margin: 0 0 0 3.5% }
      `};
      ${ media.tiny`height: auto;
        ${ flex.column }
      `};
    `
    const Layer = styled.div`
      margin: 0;
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
    `
    const ImgHeader = styled.img`
      z-index: 3;
      width: 120px;
    `
    const WrapperNav = styled.div`
      width: 70%;
      height: 100%;
      padding: 0; margin: 0.5em 0;
      vertical-align: top;
      z-index: 3;
      ${ media.tablet`
        margin: 0.5em 0; width: 100%;
      `};
      ${ media.handheld`
        ${ flex.column }
        margin: 0;
      `};
    `
    return (
      <Wrapper>
      <Layer />
        <a href='/#home'>
          <ImgHeader src='http://solutecs.biz/wp-content/uploads/2017/05/site-logo-red2.png'></ImgHeader>
        </a>
        <WrapperNav>
          <MainNav />
        </WrapperNav>
      </Wrapper>
    )
  }
}
