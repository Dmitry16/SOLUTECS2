import React from 'react'
import styled from 'styled-components'

import { Section } from './styled/wrappers'
import { media } from './styled/medias'

class SliderTop extends React.Component {

	render() {

			const Wrapper = styled.div`
				position: relative;
  			min-height: 25em;
  			overflow: hidden;
				${ media.desktop`
  				min-height: 25em;
			  ` };
				${ media.tablet`
  				min-height: 20em;
			  ` };
				${ media.handheld`
  				min-height: 10em;
			  ` };
			`
			const Img = styled.img`
				max-width: 100%;
				max-heigth: 100%;
				margin: 0;
			`
		return (
			<Section style={{marginTop: '5%'}}>
				<Wrapper>
					<Img src='http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/slider1.jpeg' alt='xxx' className="slider-img in" />
					<Img src='http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/03/slider2.jpeg' alt='xxx' className="slider-img out" />
					<Img src='http://receptum-in-natura.solutecs.biz/wp-content/uploads/sites/22/2017/04/mnt5-1.jpg' alt='xxx' className="slider-img out" />
				</Wrapper>
			</Section>
		)
	}
}

  let img_arr = document.getElementsByClassName('slider-img');

  let i=1,
      visible= false;

  let timer = window.setInterval(function() {

      if (i < img_arr.length && visible === false) {
        img_arr[i].style.opacity = 1;
        i++;

      } else if (i === img_arr.length && visible === false) {
        visible = true;
        i = 1;

      } else if (i < img_arr.length && visible === true) {
        for(let j=1; j < img_arr.length; j++) {
          img_arr[i].style.opacity = 0;
          i++;
        }
      } else if (i === img_arr.length && visible === true) {
        visible = false;
        i = 1;
      }

    }, 2000);

export default SliderTop;
