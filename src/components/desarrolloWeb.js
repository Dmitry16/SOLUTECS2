import React from 'react'
import styled from 'styled-components'
import { H1, H3, P, HR } from './styled/typographies'

export default class DesarrolloWeb extends React.Component {

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
      background: rgba(0,0,150,.5);
    `
    return (
      <Section style={{padding:'3%', margin:'0', background:'#555'}}>
            <div className="icon">
              <H1 style={{color:'rgb(220,220,220)'}}>Tecnologías Web</H1>
              <HR style={{color:'rgb(220,220,220)'}}/>
                  <P style={{color:'rgb(170,170,170)',margin:'5% 0 0'}}>En SoluTecs usamos las ultimas tecnologías web.
                  Esto nos permite desarrollar sitios web rapidos, eficaces y facilmente escalables(?) a la hora de ampliar funcionalidad.
                  </P>
              <H3 style={{color:'rgb(220,220,220)',margin:'2% 0 0'}}>Tecnologías Web empleadas</H3>
              <HR style={{color:'rgb(220,220,220)'}}/>
              <ul style={{color:'rgb(170,170,170)',margin:'2% 0 0',textAlign:'left'}}>
                <li>HTML Dinamico</li>
                <li>XML</li>
                <li>Java Script</li>
                <li>ReactJS</li>
                <li>PHP</li>
                <li>WordPress</li>                                
              </ul>
            </div>
      </Section>
    )
  }
}
