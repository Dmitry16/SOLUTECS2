import React from 'react'
import styled from 'styled-components'
import { flex } from './styled/flexes'
import { media } from './styled/medias'

class Modal extends React.Component {
  constructor() {
    super()
  }
  render() {

    const Modal = styled.div`
      ${ flex.column }
      visibility: ${ this.props.modalVisibility };
      background-color: rgba(0,0,0,0.8);
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: auto;
      padding: 2% 0;
    `
    const ModalImgWrapper = styled.div`
      width: 80%;
      height: auto;
      position: relative;
      padding: 2% 0;
    `
    const ModalImg = styled.img`
      width: 100%;
      height: 100%;
    `
    const templ = `
      ${ flex.column }
      background: rgba(100,100,100,0.5);
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      color: #aaa;
      padding: 1.5em;
      cursor: pointer;
      &:hover { background: rgba(0,0,200,0.5); color: red; }
    `
    const Close = styled.div`
      ${ templ }
      margin: 0.3em 0 1.2em;
      ${ media.tablet`
        padding: 1em;
        > span { font-size: 1em}`}
      ${ media.handheld`
        padding: 0.8em;
        > span { font-size: 0.8em}`}
    `
    const PrevImg = styled.div`
      ${ templ }
      position: absolute;
      top: 45%;
      left: -8%;
      ${ media.tablet`
        left: -10%;
        padding: 1em;
        > span { font-size: 1em}`}
      ${ media.handheld`
        left: -12%;
        padding: 0.8em;
        > span { font-size: 0.8em}`}
    `
    const NextImg = styled.div`
      ${ templ }
      position: absolute;
      top: 45%;
      right: -8%;
      ${ media.tablet`
        right: -10%;
        padding: 1em;
        > span { font-size: 1em}`}
      ${ media.handheld`
        right: -12%;
        padding: 0.8em;
        > span { font-size: 0.8em}`}
    `
    const Icon = styled.span`
      font-size: 1em;
    `
    const { nextImg, prevImg, modalPic } = this.props

    return(
      <Modal id='modal'>
        <Close onClick={this.props.closeModal}>
          <Icon className='icon'>x</Icon>
        </Close>
        <ModalImgWrapper>
          <PrevImg onClick={() => this.props.showPrevImg(prevImg, modalPic)}>
            <Icon className='icon-angle-left'></Icon>
          </PrevImg>
          <ModalImg id='modalImg' src={this.props.modalPic} alt='receptum in natura'/>
          <NextImg onClick={() => this.props.showNextImg(nextImg, modalPic)}>
            <Icon className='icon-angle-right'></Icon>
          </NextImg>
        </ModalImgWrapper>
        <Close onClick={this.props.closeModal}>
          <Icon className='icon'>x</Icon>
        </Close>
      </Modal>
    )
  }
}

export default Modal
