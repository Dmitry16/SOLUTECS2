import React from 'react'
import styled from 'styled-components'
import { H1, H3, P, HR } from './styled/typographies'

export default class Manifesto extends React.Component {

  render() {

    // background: url('http://impexa.biz/wp-content/uploads/2017/05/corn-698195_1920-830x555-150x150.jpg') fixed;

    const Section = styled.div`
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      margin: 0;
      padding: 5% 0;
      text-align: center;
    `
    const Layer = styled.div`
      margin: 0;
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background: ${ props => props.theme.layer };
    `
    const WrapperMax1100 = styled.div`
      width: 100%;
      max-width: 1100px;
      z-Index: 3;
      padding: 5%;
      border: 1px solid #ddd;
      background: rgba(0,0,50,.5);
    `
    return (
      <Section style={{padding:'5%'}}>
        <WrapperMax1100 id='about'>
          <a href="#manifesto">
            <div className="icon">
              <H1 style={{color:'rgb(220,220,220)'}}>Quien somos</H1>
              <HR style={{color:'rgb(220,220,220)'}}/>
              <H3 style={{color:'rgb(220,220,220)',margin:'5% 0 0'}}>SOLUTECS- ¡TU ALIADO EN LA JUNGLA DIGITAL!</H3>
                  <P style={{color:'rgb(170,170,170)',margin:'5% 0 0'}}>SoluTecs es una agéncia de marketing online. Estamos ubicados en Barcelona, somos proveedores de servicios de marketing online (marketing digital en internet). También realizamos servicios de Tour Virtual 360º, foto y video grabación, diseño grafico para imprenta, tarjetas, logotipos, etc.¡Nuestros precios son mas que razonables! En general, somos muy flexibles a la hora de hacer un presupuesto. ¡Incluso tenemos servicios de marketing online gratis que puedes probar sin compromiso alguno por tu parte!
                  </P>
              <H3 style={{color:'rgb(220,220,220)',margin:'2% 0 0'}}>¿Por qué trabajar con nosotros? ¿Que nos diferencia de las otras agencias del sector?</H3>
              <HR style={{color:'rgb(220,220,220)'}}/>
              <ul style={{color:'rgb(170,170,170)',margin:'2% 0 0',textAlign:'left'}}>
                <li>¡Porque somos muy flexibles y nos adaptamos a tu presupuesto y tus necesidades para darte el mejor servicio!</li>
                <li>¡Porque para nuestros clientes hacemos muchas cosas gratis!</li>
                <li>¡Porque pagas despues de haber obtenido los resultados y no antes!</li>
              </ul>
              <H3 style={{color:'rgb(220,220,220)',margin:'2% 0 0'}}>Nuestros valores</H3>
              <HR style={{color:'rgb(220,220,220)'}}/>
              <ul style={{color:'rgb(170,170,170)',margin:'2% 0 0',textAlign:'left'}}>
                <li>Transparencia</li>
                <li>Seriedad</li>
                <li>Calidad</li>
                <li>Eficacia</li>
              </ul>
            </div>
          </a>
        </WrapperMax1100>
      </Section>
    )
  }
}
