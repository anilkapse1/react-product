import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styledComponents from 'styled-components'


const Receipe = () => {

    const[activeTab,setActiveTab] = useState('description')
    const params = useParams();
    const [details,setDetails] = useState([])
    const fetchDetails=async()=>{
        const api = await fetch(`https://fakestoreapi.com/products/${params.name}`);
        const data = await api.json();
        setDetails(data);
    }

    useEffect(()=>{
        fetchDetails();
    },[params]);

  return (
    <DetailsWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="demo"/>
        </div>
        <Info>
            <Button className={activeTab==='description'?'active':''} onClick={()=>setActiveTab('description')}>description</Button>
            <Button className={activeTab==='price'?'active':''} onClick={()=>setActiveTab('price')}>price</Button>
        </Info>

        {activeTab==='description' && (
            <p>{details.description}</p>
        )}

        {activeTab==='price' && (
            <p>{details.price}</p>
        )}

    </DetailsWrapper>
  )
}


const DetailsWrapper=styledComponents.div`
    margin-bottom:5rem;
    margin-top:10rem;
    display:flex;
    .active{
        background-color:black;
        color:white
    }
    }
    h2{
        margin-bottom:2rem;
    }
    li{
        font-size:1.2rem;
        line-height:2.5rem;
    }
    ul{
        margin-top:2rem;
    }
`;

const Button = styledComponents.button`
    padding:1rem 2rem;
    color:#313131;
    background:white;
    border:2px solid red;
    margin-right:2rem;
    .active{
      


`;

const Info= styledComponents.div`
    margin-left:10rem;
`;

export default Receipe