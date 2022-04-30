import React, { useState } from 'react'
import styledComponents from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const Search = () => {

    const [input,setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        navigate(`searched/${input}`)
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="electronics,jewelery,men's clothing,women's clothing"/>
        <AiOutlineSearch/>
    </FormStyle>
  )
}


const FormStyle = styledComponents.form`
    position:relative;
    width:100%;
    text-align:center;
    margin: 20px 0px;
    input{
        border:none;
        background:linear-gradient(35deg,#494949,#313131);
        font-size:1.5rem;
        color:white;
        padding:1rem 3rem;
        border-radius:1rem;
        outline:none;
    }
    svg{
        position:absolute;
        top:50%;
        left:0%;
        transform:translate(100%,-50%);
        color:white
    }

`;
export default Search