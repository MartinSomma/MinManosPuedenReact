import React, { Component ,useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomContext } from "../Context/CustomContext";



export default function SimpleSlider({destacados}) {
      const { agregarProducto } = useContext(CustomContext);


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={estilos.carrouselConteiner}>
      <Slider {...settings}>

        {destacados.map( (e, i)=> (
        <div key={i}>
          <img style={estilos.imagenes} src={e.foto} alt={e.foto} />
        </div>
           
                  
        ))}

      </Slider>
        
      
    </div>
    
  );
}


const estilos = {
  imagenes: {
    width: "200px",
    
  },
  carrouselConteiner: {
    width: "200px",
    backgroung: "blue",
    margin: "auto",
  }
}
