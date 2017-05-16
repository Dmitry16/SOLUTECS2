import React from 'react'
import ContactForm from './contactForm'
import styled from 'styled-components'
import { WrapperMax1100 } from './styled/wrappers'

export default class ContactPage extends React.Component {

  render() {
    //Style for the form section
        const FormSection = styled.div`
          border: 1px solid steelblue;
          margin: 5% 0;
          padding: 5%;
          background: rgba(255, 255, 255, 0.3);
          text-align: center;
        `
    return (
      <WrapperMax1100>
        <FormSection>
          <ContactForm />
        </FormSection>
      </WrapperMax1100>
    )
  }
}
