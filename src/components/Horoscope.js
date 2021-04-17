import React from 'react';
import Slider from 'infinite-react-carousel';
import Aries from '../images/aries.png';
import Taurus from '../images/taurus.png';
import Gemini from '../images/gemini.png';
import Cancer from '../images/cancer.png';
import Leo from '../images/leo.png';
import Virgo from '../images/virgo.png';
import Libra from '../images/libra.png';
import Scorpio from '../images/scorpio.png';
import Sagittarius from '../images/sagittarius.png';
import Capricorn from '../images/capricorn.png';
import Aquarius from '../images/aquarius.png';
import Pisces from '../images/pisces.png';
import "./Horoscope.css";
import DragHandleRoundedIcon from '@material-ui/icons/DragHandleRounded';
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';

const Horoscope = () => (
    <div style={{backgroundColor:"lightgrey"}}>
    <div>
            <h1>HOROSCOPES</h1>
            <div>
              <DragHandleRoundedIcon/>
              <CheckBoxOutlineBlankRoundedIcon style={{backgroundColor:"orange"}}/>
              <DragHandleRoundedIcon/>
            </div>
            <p style={{fontWeight:"600"}}>Today, what does your zodiac sign recommends? Find out! you can also look into weekly, monthly or yearly detail predictions.</p>
            <p style={{fontWeight:"600"}}>Our expert’s prediction will help you to plan for near future & future.</p>
        </div>
  <Slider >
    <div className="dotone">
     <img style={{height:100, width:100,marginRight:30}} src={Aries} alt="zodiac"/>
     <img style={{height:100, width:100,marginRight:30}} src={Taurus} alt="zodiac"/>
     <img style={{height:100, width:100,marginRight:30}} src={Gemini} alt="zodiac"/>
     <img style={{height:100, width:100,marginRight:30}} src={Cancer} alt="zodiac"/>
     <img style={{height:100, width:100,marginRight:30}} src={Leo} alt="zodiac"/>
     <img style={{height:100, width:100,marginRight:30}} src={Virgo} alt="zodiac"/>
    </div>
    <div>
    <img style={{height:100, width:100,marginRight:30}} src={Libra} alt="zodiac"/>
    <img style={{height:100, width:100,marginRight:30}} src={Scorpio} alt="zodiac"/>
    <img style={{height:100, width:100,marginRight:30}} src={Sagittarius} alt="zodiac"/>
    <img style={{height:100, width:100,marginRight:30}} src={Capricorn} alt="zodiac"/>
    <img style={{height:100, width:100,marginRight:30}} src={Aquarius} alt="zodiac"/>
    <img style={{height:100, width:100}} src={Pisces} alt="zodiac"/>
    </div>
  </Slider>
  </div>
);
export default Horoscope;