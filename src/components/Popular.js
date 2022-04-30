import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { Wrapper,Card,Gradient } from "./Styled";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";



const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {

    const check = localStorage.getItem('product');
    if(check){
      console.log('get data from local storage');
        setPopular(JSON.parse(check))
    }else{
      console.log('calling api');
        const api = await fetch(
            `https://fakestoreapi.com/products`
          );
          const data = await api.json();
          localStorage.setItem('product',JSON.stringify(data));
          setPopular(data);
    }

  };

  console.log(popular);

  return (
    <Wrapper>
    <h2>Popular products</h2>
      {
        <Splide options={ {
            rewind: true,
            gap   : '5rem',
            perPage:'4',
            arrows:false,
            pagination:false,
            drag:'free'
        } }>
          {popular.map((product, idx, arr) => {
            return (
                <SplideSlide key={product.id}>
                  <Link to={`/receipe/${product.id}`}>
                    <Card>
                          <p>{product.title}</p>
                          <img src={product.image} alt="demo" />
                          <Gradient/>
                      </Card>
                  </Link>
                </SplideSlide>
            );
          })}
        </Splide>
      }
    </Wrapper>
  );
};


export default Popular;
