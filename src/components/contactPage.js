import React from 'react'
import ContactForm from './contactForm'
import styled from 'styled-components'

export default class ContactPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    //Style for the form section
        const FormSection = styled.div`

          border: 2px solid #fff;
          margin: 5% 0;
          padding: 5%;
          background: rgba(255, 255, 255, 0.3);
          text-align: center;
        `
    return (
      <FormSection>
        <ContactForm />
      </FormSection>
    )
  }
}
