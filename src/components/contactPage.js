import React from 'react'
import ContactForm from './contactForm'
import styled from 'styled-components'
import { WrapperMax1100 } from './styled/wrappers'
import { media } from './styled/medias'
import { H1, H3, P, HR } from './styled/typographies'

export default class ContactPage extends React.Component {

  render() {

    const FormSection = styled.div`
      border: 1px solid steelblue;
      width: 40%;
      margin: 5% auto;
      padding: 3em 2em;
      background: rgba(200, 200, 255, .3);
      text-align: center;
      border-radius: 0.2em;
      ${ media.tablet`
        width: 50%;
        `}
      ${ media.handheld`
          width: 100%;
          padding: 1em 0.1em;
      `}
    `
    return (
      <WrapperMax1100>
      <H1 style={{color:'rgb(100,100,150)'}}>Contacto</H1>
      <HR style={{color:'rgb(214,80,80)'}} />
        <FormSection id='contact'>
          <ContactForm />
        </FormSection>
      </WrapperMax1100>
    )
  }
}
