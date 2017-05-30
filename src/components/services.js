import React from 'react'
import styled from 'styled-components'

import Icon from './icon'
import { H1, HR } from './styled/typographies'
import { WrapperMax1100 } from './styled/wrappers'

const icons = [
  {
    icon: 'icon-connectdevelop',
    title: 'Desarrollo Aplicaciones Web/ Moviles',
    link: '#'
  },
  {
    icon: 'icon-object-group',
    title: 'Diseño Web',
    link: '#'
  },
  {
    icon: 'icon-pencil-square-o',
    title: 'Marketing de Contenidos',
    link: '#'
  },
  {
    icon: 'icon-google',
    title: 'Tour Virtual de 360º en Google',
    link: '#'
  },
  {
    icon: 'icon-line-chart',
    title: 'Optimización SEO',
    link: '#'
  },
  {
    icon: 'icon-eye',
    title: 'Publicidad en Internet',
    link: '#'
  },
]

class Icons extends React.Component {

  render() {

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
    const Wrapper = styled.div`
      z-index: 9 !important;
    `
    return (
      <Section id='services'>
        <WrapperMax1100 style={{zIndex:'3'}}>
          <H1 style={{color:'rgb(100,100,150)'}}>Nuestros Servicios</H1>
          <HR style={{color:'rgb(214,80,80)'}} />
          <div className="icons-wrapper">
            {icons.map((icon,id) =>
              <Icon
                href={icon.link}
                className={icon.icon}
                icon_title={icon.title}
                key={id}
              />
            )}
          </div>
        </WrapperMax1100>
      </Section>
    )
  }
}

export default Icons
