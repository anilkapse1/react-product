import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Wrapper,Card,Gradient } from '../components/Styled';


const Cuisine  = () => {
    let params = useParams();

    const [popular, setPopular] = useState([]);
    useEffect(() => {
      getPopular(params.category);
    }, [params]);
  
    const getPopular = async (category) => {
          const api = await fetch(
              `https://fakestoreapi.com/products/category/${category}`
            );
            const data = await api.json();
            setPopular(data);
  
    };


    return (
        <Wrapper>
        <h2>Popular {params.category}</h2>
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
  )
}

export default Cuisine 