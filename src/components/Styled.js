
import styledComponents from "styled-components";

//creating a styled component
export const Wrapper = styledComponents.div`
margin:4rem 0rem;
h2{
    margin:50px 0px;
}
`;

export const Card = styledComponents.div`
min-height:25rem;
border-radius:2rem;
overflow:hidden;
position:relative;

img{
    border-radius:2rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover
}

p{
    position:absolute;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    z-index:10;
    background-color:black;
    color:white;
    width:100%;
    padding:10px;
    margin:0px;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
}
`;

export const Gradient = styledComponents.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export const List = styledComponents.ul`
    background-color:#c3c3c3;
    list-style-type:none;
    margin:0px;
    padding:0px;
    display:flex;
    justify-content: center;

    li{
        padding:10px;
        border-right:.7px solid;
        a{
            text-decoration:none;
            color:#454545;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                margin:0px 10px;
            }
        }

        a.selected{
            color:blue;
        }
    }
`;

