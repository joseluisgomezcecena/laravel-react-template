import React from "react";
import styled from "styled-components";
import {v4} from "uuid";

const ErrorStyle = styled.span`
    color: red;
    text-align: left;
    `
    
const FloatingTextFieldStyle = styled.div`
    &.field{
    display: flex;
    flex-flow: column-reverse;
    margin-bottom: 1rem;
    width: 100%;
}

    label, input{
        transition: all 0.3s ease-in-out;
                    
}

    input{
        font-size: 1.2rem;
        border:0;
        border-bottom: 1px solid #ccc;
        padding: 0.25rem 0;
    }
    
    input:focus{
        outline: none;
        border-bottom: 1px solid #000;
        
    }
    
    label{
        color: #ccc;
        font-size: 1.2rem;
    }
    
    input:placeholder-shown + label{
        cursor: text;
        max-width: 66.66%;
        //overflow: hidden;
        transform-origin: left bottom;
        transform: translate(0, 1.5rem) scale(1.25);
    }
    
    input::placeholder{
        opacity: 0;
        transition: inherit;
    }
    
    input:not(:placeholder-shown) + label{
        input:focus + label{
            transform: translate(0, 0) scale(1);
        }
        
    }

`


function FloationgTextField({label, onchange, value, error, type}) {

    const uuid = v4();

    return (
      <div> </div>
    );
}
