import React from 'react'
import ContactForm from './contactForm'
import styled from 'styled-components'
import { WrapperMax1100 } from './styled/wrappers'
import { media } from './styled/medias'

export default class ContactPage extends React.Component {

  render() {

    const FormSection = styled.div`
      border: 1px solid steelblue;
      width: 30%;
      margin: 5% 5%;
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
        <FormSection id='contact'>
          <ContactForm />
        </FormSection>
    )
  }
}
