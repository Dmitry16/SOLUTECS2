import React from 'react'
import styled from 'styled-components'

import Icon from './icon'
import { H1, HR } from './styled/typographies'
import { WrapperMax1100 } from './styled/wrappers'

const icons = [
  {
    icon: 'icon-globe',
    title: 'Comercio Internacional',
    link: '#'
  },
  {
    icon: 'icon-ship',
    title: 'Administracion Logistica',
    link: '#'
  },
  {
    icon: 'icon-line-chart',
    title: 'Marketing',
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
      position: relative;
      margin: 0;
      padding: 5% 0;
      background: black url('http://impexa.biz/wp-content/uploads/2017/05/impexa3.jpg') fixed no-repeat center;
      background-size: cover;
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
    const Wrapper = styled.div`
      z-index: 9 !important;
    `
    return (
      <Section id='services'>
      <Layer />
        <WrapperMax1100 style={{zIndex:'3'}}>
          <H1 style={{color:'rgb(224, 123, 46)'}}>Nuestros Servicios</H1>
          <HR style={{color:'rgb(224, 123, 46)'}} />
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
