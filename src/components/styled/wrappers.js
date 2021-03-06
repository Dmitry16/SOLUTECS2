import styled from 'styled-components'
import { media } from './medias'
import { css } from 'styled-components'
import { flex } from './flexes'

// background-image: -webkit-gradient(linear, left top, right top, color-stop(50%, rgba(255, 255, 255, 0.07)), color-stop(50%, transparent)), -webkit-gradient(linear, left top, right top, color-stop(50%, rgba(255, 255, 255, 0.13)), color-stop(50%, transparent)), -webkit-gradient(linear, left top, right top, color-stop(50%, transparent), color-stop(50%, rgba(255, 255, 255, 0.17))), -webkit-gradient(linear, left top, right top, color-stop(50%, transparent), color-stop(50%, rgba(255, 255, 255, 0.19)));
// background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.07) 50%, transparent 50%), -webkit-linear-gradient(left, rgba(255, 255, 255, 0.13) 50%, transparent 50%), -webkit-linear-gradient(left, transparent 50%, rgba(255, 255, 255, 0.17) 50%), -webkit-linear-gradient(left, transparent 50%, rgba(255, 255, 255, 0.19) 50%);
// background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.07) 50%, transparent 50%), linear-gradient(90deg, rgba(255, 255, 255, 0.13) 50%, transparent 50%), linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.17) 50%), linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.19) 50%);
// background-size: 1px, 2px, 3px, 6px;

export const Container_main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${ props => props.theme.bodyBG };
`
export const WrapperMax1100 = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding: 3% 0;
`
export const Section = styled.section`
  width: 100%;
  margin: 5% auto;
  background: ${props => props.dark ? 'rgba(0,0,50,.2)' : 'none'};
  text-align: center;
`
export const PicWrapper = styled.div`
    width: 32%;
    margin: 0.4em;
    overflow: hidden;
  ${ media.wide`
    width: 32%;
    margin: 0.4em;
  ` };
  ${ media.desktop`
    width: 32%;
    margin: 0.3em;
  ` };
  ${ media.tablet`
    width: 32%;

    margin: 0.2em;
  ` };
  ${ media.handheld`
    width: 48%;
    margin: 0.1em;
  ` }
`
export const WrapperHeaderTop = styled.div`
  position: fixed;
  top: 0;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0; margin: 0;
  > a { margin: 0.5em 0 0 2em;}
  ${ media.tablet`height: auto;
    > img { margin: 0.5em 0 0; }
    > div > div { margin: 0.5em 0; width: 100%; }
  `};
  ${ media.handheld`
    ${ flex.column }
    height: auto;
    > a { margin: auto; }
    > a > img { margin: 0 0 0 3.5% }
  `};
  ${ media.tiny`height: auto;
    ${ flex.column }
  `};
`
export const WrapperHeaderScrolled = styled.div`
  position: fixed;
  top: 0;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0; margin: 0;
  background: rgba(0,0,150,.9);
  > a { margin: 0.5em 0 0 2em;}
  ${ media.tablet`height: auto;
    > img { margin: 0.5em 0 0; }
    > div > div { margin: 0.5em 0; width: 100%; }
  `};
  ${ media.handheld`height: auto;
    ${ flex.column }
    > a { margin: auto; }
    > a > img { margin: 0 0 0 3.5% }
  `};
  ${ media.tiny`height: auto;
    ${ flex.column }
  `};
  `
