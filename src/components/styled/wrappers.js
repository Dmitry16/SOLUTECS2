import styled from 'styled-components'
import { media } from './medias'
import { css } from 'styled-components'
import { mediaQ } from './medias'

// background-image: -webkit-gradient(linear, left top, right top, color-stop(50%, rgba(255, 255, 255, 0.07)), color-stop(50%, transparent)), -webkit-gradient(linear, left top, right top, color-stop(50%, rgba(255, 255, 255, 0.13)), color-stop(50%, transparent)), -webkit-gradient(linear, left top, right top, color-stop(50%, transparent), color-stop(50%, rgba(255, 255, 255, 0.17))), -webkit-gradient(linear, left top, right top, color-stop(50%, transparent), color-stop(50%, rgba(255, 255, 255, 0.19)));
// background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.07) 50%, transparent 50%), -webkit-linear-gradient(left, rgba(255, 255, 255, 0.13) 50%, transparent 50%), -webkit-linear-gradient(left, transparent 50%, rgba(255, 255, 255, 0.17) 50%), -webkit-linear-gradient(left, transparent 50%, rgba(255, 255, 255, 0.19) 50%);
// background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.07) 50%, transparent 50%), linear-gradient(90deg, rgba(255, 255, 255, 0.13) 50%, transparent 50%), linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.17) 50%), linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.19) 50%);
// background-size: 1px, 2px, 3px, 6px;

export const Container_main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 !important;
  background: ${ props => props.theme.bodyBG };
  ${mediaQ.giant`padding: 0`};
  ${mediaQ.desktop`padding: 0`};
  ${mediaQ.tablet`padding: 0 5px`};
  ${mediaQ.phone`padding: 0 5px`};
`
export const WrapperMax1100 = styled.div`
  width: 100%;
  max-width: 1100px;
`
export const Section = styled.section`
  border: ${ props => props.theme.borderSection };
  margin: 0 0 5%;
  background: rgba(#fff, 0.3);
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
