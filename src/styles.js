import styled from "styled-components";

export const Container = styled.div`

    width: 50%;
    margin-left: 25%;
    height: 650px;
    margin-top: 10%;
    background-Color: #F9F9fe;
    border-radius: 4px;
    box-shadow: 4px 4px 0px #c0c0c0;
   
`

export const Titulo = styled.h1`


    text-align: center;
    font-weight: bold;
    position: relative;
    font-size: 50px;
    top: 70px;
    margin-bottom: 15%;

    span {
    color: #2D2D;
  }
        
`

export const Input = styled.input`

    height: 50px;
    width: 80%;
    border-Color: '#000';
    border-Width: 1px;
    border-Radius: 4px;
    padding: 10px;
    margin-Bottom: 20px;
    font-Size: 20px;
    background-Color:#FFF;
    margin-left: 10%;

`

export const Botao = styled.button`
    border-Radius: 4px;
    height: 50px;
    width: 40%;
    margin-Top: 20px;
    justify-Content: center;
    align-Items: center;
    background-Color: #2D2D;
    margin-left: 30%;

    &:hover{
        cursor: pointer;
    }
`