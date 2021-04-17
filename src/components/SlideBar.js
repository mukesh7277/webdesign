import { Button } from '@material-ui/core';
import React,{useState,useRef,useEffect} from 'react';
import './SlideBar.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function SlideBar({slides}) {
const[current,setCurrent] =useState(0)
const length= slides.length
const timeout = useRef(null)

useEffect(() => {
    const nextSlide =()=>{
        setCurrent(current =>(current===length-1 ? 0 : current+1))
    }
    timeout.current = setTimeout(nextSlide,3000)
    
    return function(){
        if(timeout.current){
            clearTimeout(timeout.current)
        }
    }
}, [current,length])

const nextSlide =() =>{
    setCurrent(current === length-1 ? 0 : current + 1)
    
}
const prevSlide =() =>{
    setCurrent(current === 0 ? length-1 : current - 1)
    
} 
    return (
        <div className="container">
          <div className="wrapper">
           {slides.map((slide,index)=>{
             return (
                 <div className="slide" key={index}>
                     {index === current && (
                       <div className="slider">
                       <img className="image" src={slide.image} alt={slide.alt}/>
                       <div className="content">
                           <h2 className="hone">{slide.title} </h2>
                           <h1 className="hone">{slide.title2}</h1>
                           <Button variant="contained" size="medium">{slide.label}</Button>
                       </div>
                   </div>
                     )}
                 </div>
             )
           })}
           <div className="next">
            <Button onClick={prevSlide}><ArrowLeftIcon/></Button>  
            <Button onClick={nextSlide}><ArrowRightIcon/></Button>  
           </div>  
          </div>  
        </div>
    )
}
