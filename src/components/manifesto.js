import React from 'react'
import { H1, H3, Icon, P } from './styled/typographies'
import { Section } from './styled/wrappers'

export default class Manifesto extends React.Component {
  constructor() {
    super()
  }

  render() {

    return (
      <Section style={{padding:'5%'}}>
        <a href="#manifesto">
          <div className="icon">
          <H1 style={{margin:'0 0 5% 0'}}>Sobre Companía</H1>
              <P className="quien-somos">Impexa es una companía que se dedica al comercio internacional. La companía fue fundada en el año 2010,
              originalmente se llamaba Europartner y se enfocaba a las operaciones de exportación de azulejos ceramicos y
              aceite de oliva de España a Ucrania.
              Sin embargo en los ultimos 2 años el ambito de las operaciones de la companía en el comercio internacional
              se hizo bastante mas amplio. Ahora exportamos de Ucrania a muchos paises por todo el mundo una gama muy amplia de
              diferentes productos.
              </P>
          </div>
        </a>
      </Section>
    )
  }
}
