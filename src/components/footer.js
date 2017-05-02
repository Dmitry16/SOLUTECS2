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
      margin: 0;
      border: 2px solid #fff;
      background: darkviolet;
      > div > p { font-size: 2em }
    `
    return (
      <Footer className="footer" role="contentinfo">

          <div className='icon-wrapper'>
            <Icon className="icon-invert"></Icon>
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
          <p>@2017 Todos los derechos reservados</p>
    </Footer>
  );
  }
}
export default Footer;
