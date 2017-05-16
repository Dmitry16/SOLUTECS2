import React from 'react'
import styled from 'styled-components'
import { media } from './styled/medias'
import { H1, H3, Icon, P } from './styled/typographies'

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    const WrapperLinks = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      > ul { list-style-type: none }
    `
    const Footer = styled.footer`
      display: flex;
      flex-direction: column;
      align-items: center;
      background: ${ props => props.theme.footerBG };
      padding:3em 1.618em;
      width:100%
      border: 2px solid #fff;
      > div > p { font-size: 2em }
    `
    const ImgFooter = styled.img`
      width: 50px;
    `
    return (
      <Footer className="footer" role="contentinfo">

          <div className='icon-wrapper'>
            <ImgFooter src='./assets/img/logo2.png'></ImgFooter>
          </div>

          <WrapperLinks>
            <ul>
              <li><h3>Contenido</h3></li>
              <li><a href="javascript:void(0)">Inicio</a></li>
              <li><a href="javascript:void(0)">Contacto</a></li>
              <li><a href="javascript:void(0)">Fotos</a></li>
            </ul>
            <ul>
              <li><h3>Sigue nos</h3></li>
              <li><a href="javascript:void(0)">Facebook</a></li>
              <li><a href="javascript:void(0)">Twitter</a></li>
              <li><a href="javascript:void(0)">YouTube</a></li>
            </ul>
            <ul>
              <li><h3>Aviso Legal</h3></li>
              <li><a href="javascript:void(0)">Terminos y condiciones</a></li>
              <li><a href="javascript:void(0)">Politica de privacidad</a></li>
            </ul>
          </WrapperLinks>

          <hr />
          <p>Copywrite 2017</p>
    </Footer>
  );
  }
}
export default Footer;
