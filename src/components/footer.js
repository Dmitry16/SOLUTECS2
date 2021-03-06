import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { media } from './styled/medias'
import { flex } from './styled/flexes'
// import { H1, H3, Icon, P } from './styled/typographies'

class Footer extends React.Component {

  render() {
    const WrapperLinks = styled.div`
      ${ flex.row }
      width: 100%;
      margin: 0 0 2%; padding: 0;
      > ul { list-style-type: none;
              font-size: 0.7rem;
              width: 15em;
              text-align: center;
              margin:1%; padding:0;
              > li > h3 {color:khaki; font-weight:100}
            }
    `
    const Wrapper = styled.div`
      ${ flex.row }
      > div { margin: 0 4%; text-align: left; }
      ${ media.handheld`
        ${ flex.column };
        > div { margin: 0%; text-align: center; }`}
    `
    const WrapperSR = styled.div`
      ${ flex.row };
      margin: 6% 0 0;
      > li { margin: 0 2%;
        > a > p { font-size: 1.5rem;
              &:hover {color: khaki}}}
    `
    const Footer = styled.footer`
      ${ flex.column }
      background: ${ props => props.theme.footerBG };
      padding:1.5em 1.618em;
      width:100%
      border: 2px solid #fff;
      > div > p { font-size: 1em }
    `
    const ImgFooter = styled.img`
      width: 100px;
    `
    const S = styled.span`
      color: khaki;
    `
    return (
      <Footer className="footer" role="contentinfo">

          <WrapperLinks>
            <ul>
              <li><h3>Contenido</h3></li>
              <Wrapper>
                <div>
                  <li><a href='/#start'>Inicio</a></li>
                  <li><a href='/#services'>Servicios</a></li>
                  <li><a href='/#productos'>Productos</a></li>
                </div>
                <div>
                  <li><a href='/#about'>Quien Somos</a></li>
                  <li><a href='/#blog'>Blog</a></li>
                  <li><Link to='/contact'>Contacto</Link></li>
                </div>
              </Wrapper>
            </ul>
            <ul>
              <li><h3>Sigue nos</h3></li>
              <WrapperSR>
                <li><a href="javascript:void(0)"><p className="icon-facebook-square"></p></a></li>
                <li><a href="javascript:void(0)"><p className="icon-instagram"></p></a></li>
                <li><a href="javascript:void(0)"><p className="icon-twitter-square"></p></a></li>
              </WrapperSR>
            </ul>
            <ul>
              <li><h3>Aviso Legal</h3></li>
              <li><Link to="/terms">Terminos y condiciones</Link></li>
              <li><Link to="/privacy">Politica de privacidad</Link></li>
            </ul>
          </WrapperLinks>

          <hr style={{width:'50%'}}/>
          <p style={{fontSize:'0.7rem',textAlign:'center'}}>Diseño y desarrollo web:
            <S> SoluTecs</S><br/>Copyright 2017</p>
    </Footer>
  );
  }
}
export default Footer;
