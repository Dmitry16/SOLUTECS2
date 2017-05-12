import React from 'react'
import styled from 'styled-components'
import { H1, H3, Icon, P, HR } from './styled/typographies'
import { WrapperMax1100 } from './styled/wrappers'

export default class Manifesto extends React.Component {

  render() {

    const Section = styled.div`
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      position: relative;
      margin: 0;
      padding: 5% 0;
      background: url('http://impexa.biz/wp-content/uploads/2017/05/corn-698195_1920-830x555-150x150.jpg') fixed;

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

    return (
      <Section style={{padding:'5%'}}>
      <Layer />
        <WrapperMax1100 style={{zIndex:'3'}}>
          <a href="#manifesto">
            <div className="icon">
            <H1 style={{color:'rgb(224, 123, 46)'}}>Quien somos</H1>
            <HR style={{color:'rgb(224, 123, 46)'}}/>
                <P style={{color:'rgb(224, 123, 46)',margin:'5% 0 0'}}>Impexa es una companía que se dedica al comercio internacional. La companía fue fundada en el año 2010,
                originalmente se llamaba Europartner y se enfocaba a las operaciones de exportación de azulejos ceramicos y
                aceite de oliva de España a Ucrania.
                Sin embargo en los ultimos 2 años el ambito de las operaciones de la companía en el comercio internacional
                se hizo bastante mas amplio. Ahora exportamos de Ucrania a muchos paises por todo el mundo una gama muy amplia de
                diferentes productos.
                </P>
            </div>
          </a>
        </WrapperMax1100>
      </Section>
    )
  }
}
