import React from 'react';
import DragHandleRoundedIcon from '@material-ui/icons/DragHandleRounded';
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';

export default function ServicesText() {
    return (
        <div>
            <h1>OUR SERVICES</h1>
            <div>
              <DragHandleRoundedIcon/>
              <CheckBoxOutlineBlankRoundedIcon style={{backgroundColor:"orange"}}/>
              <DragHandleRoundedIcon/>
            </div>
            <p style={{fontWeight:"600"}}>We at AstroKapoor believe in “Health, Wealth, Peace and Prosperity”.</p>
            <p style={{fontWeight:"600"}}>In AstroKapoor we provide various consulting services, among which Medical Astrology and Corporate Astrology are key services.</p>
        </div>
    )
}
