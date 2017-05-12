import React from 'react'
import styled from 'styled-components'

import Icon from './icon'
import { H1 } from './styled/typographies'
import { WrapperMax1100 } from './styled/wrappers'

const icons = [
  {
    icon: 'icon-map-signs',
    title: 'Senderismo',
    link: '#'
  },
  {
    icon: 'icon-lemon-o',
    title: 'Recogida de frutos silvestres',
    link: '#'
  },
  {
    icon: 'icon-cutlery',
    title: 'Cocina ecologica creativa',
    link: '#'
  },
  {
    icon: 'icon-pagelines',
    title: 'Fitoterapia',
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
      background: url('http://impexa.biz/wp-content/uploads/2017/05/corn-698195_1920-830x555-150x150.jpg');
      text-align: center;
    `
    const Layer = styled.div`
      margin: 0;
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba(0, 0, 150, 0.8);
    `
    const Wrapper = styled.div`
      z-index: 9 !important;
    `
    return (
      <Section>
      <Layer />
        <WrapperMax1100 style={{zIndex:'3'}}>
          <H1>Servicios Profesionales</H1>
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
