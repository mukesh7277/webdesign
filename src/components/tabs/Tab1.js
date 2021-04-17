import React from 'react';
import Cards from './Cards';
import {Button, Grid} from "@material-ui/core";
import love1 from "../../images/love1.jpg";
import love2 from "../../images/love2.jpg";
import love3 from "../../images/love3.jpg";
import love4 from "../../images/love4.jpg";
import love5 from "../../images/love5.jpg";
import love6 from "../../images/love6.jpg";


export default function Tab1() {
    return (
        <div>
            <Grid container>
              <Grid item xs={12} sm={6} md={4}>
                <Cards 
                title={"Know Your Spouse From Your Horoscope"}
                image={love6} 
                price1={"$̶5̶,̶4̶0̶0̶.̶0̶0̶"}
                price2={"$3,600.00"}
                alt={"love"}
                 /> 
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Cards
                title={"How Will Be My Married Life"}
                image={love3} 
                price1={"$̶5̶,̶4̶0̶0̶.̶0̶0̶"}
                price2={"$3,600.00"}
                alt={"love"}/> 
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Cards
                title={"Prediction Of My Marriage"}
                image={love1} 
                price1={"$̶5̶,̶4̶0̶0̶.̶0̶0̶"}
                price2={"$3,600.00"}
                alt={"love"}/> 
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Cards
                title={"My Marriage Will Be Love Or Arranged"}
                image={love4} 
                price1={"$̶5̶,̶4̶0̶0̶.̶0̶0̶"}
                price2={"$3,600.00"}
                alt={"love"}/> 
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Cards
                title={"Remedial Astrology For Delay In Marriage"}
                image={love5} 
                price1={"$̶5̶,̶4̶0̶0̶.̶0̶0̶"}
                price2={"$3,600.00"}
                alt={"love"}/> 
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Cards
                title={"Marital Problems Solutions"}
                image={love2} 
                price1={"$̶5̶,̶4̶0̶0̶.̶0̶0̶"}
                price2={"$3,600.00"}
                alt={"love"}/> 
              </Grid>
           </Grid>
           <Button style={{marginTop:20,backgroundColor:"orange"}} variant="contained" size="medium">View More</Button>
        </div>
    )
}
