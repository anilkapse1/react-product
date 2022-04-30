import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";


import "@splidejs/react-splide/css";
import { Wrapper,Card,Gradient } from "./Styled";
import { Link } from "react-router-dom";

const Veggie = () => {
  const [jewelery, setJewelery] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {

    const check = localStorage.getItem('jewelery');
    if(check){
        setJewelery(JSON.parse(check))
    }else{
        const api = await fetch(
            `https://fakestoreapi.com/products/category/electronics`
          );
          const data = await api.json();
          localStorage.setItem('jewelery',JSON.stringify(data));
          setJewelery(data);
    }

  };

  console.log(jewelery);

  return (
    <Wrapper>
    <h2>Popular electronics</h2>
      {
        <Splide options={ {
            rewind: true,
            gap   : '5rem',
            perPage:'3',
            arrows:false,
            pagination:false,
            drag:'free'
        } }>
          {jewelery.map((product, idx, arr) => {
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


export default Veggie;
