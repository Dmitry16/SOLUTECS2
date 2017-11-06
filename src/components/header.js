import React from 'react'
import styled from 'styled-components'

import MainNav from './nav'
import { WrapperHeaderTop, WrapperHeaderScrolled, WrapperMax1100 } from './styled/wrappers'

//Actions
import { renderHeaderTop, renderHeaderScrolled } from '../actions/headerActions'

import { media } from './styled/medias'
import { LT } from  './styled/titles'
import { flex } from './styled/flexes'

export class HeaderTop extends React.Component {

  render() {

    const Layer = styled.div`
      margin: 0;
      top: 0;
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
        margin: auto;
      `};
    `
    window.addEventListener('scroll', () => {
        if(window.scrollY>100) {
          this.props.dispatch(renderHeaderScrolled())
        }
        if(window.scrollY===0 && this.props.frontPage === true) {
          this.props.dispatch(renderHeaderTop())
        }
      })

    return (
      <WrapperHeaderTop id='header'>
      <Layer />
        <a href='/#home'>
          <ImgHeader src='http://solutecs.biz/wp-content/uploads/2017/05/site-logo-red2.png'></ImgHeader>
        </a>
        <WrapperNav>
          <MainNav />
        </WrapperNav>
      </WrapperHeaderTop>
    )
  }
}

export class HeaderScrolled extends React.Component {

  render() {

    window.addEventListener('scroll', () => {
        if(window.scrollY===0 && this.props.frontPage === false) {
          this.props.dispatch(renderHeaderScrolled())
          console.log('ddd ' + this.props.frontPage)
        }
      })

    if (this.props.frontPage === false) {
      document.getElementById('home').style.display='none'
    }

    const Layer = styled.div`
      margin: 0;
      top: 0;
      width: auto;
      height: 100%;
      position: absolute;
      background: rgba(100,100,100,.5);
      z-index: 1;
    `
    const ImgHeader = styled.img`
      width: 120px;
    `
    const WrapperNav = styled.div`
      width: 70%;
      height: 100%;
      padding: 0; margin: 0.5em 0;
      vertical-align: top;
      z-index: 9;
      ${ media.tablet`
        margin: 0.5em 0; width: 100%;
      `};
      ${ media.handheld`
        ${ flex.column }
        margin: 0;
      `};
    `
    return (
      <WrapperHeaderScrolled id='header'>
        <Layer />
        <a href='/#home' style={{zIndex:'3',marginBottom:'0.5em'}}>
          <ImgHeader src='http://solutecs.biz/wp-content/uploads/2017/05/site-logo-red2.png'></ImgHeader>
        </a>
        <WrapperNav>
          <MainNav />
        </WrapperNav>
      </WrapperHeaderScrolled>
    )
  }
}
