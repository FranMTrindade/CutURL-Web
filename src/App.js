import React, { useState } from 'react'
import { Container, Titulo, Input, Botao } from './styles';
import { toast } from "react-toastify";






export default function App() {

  

    const [url, setUrl] = useState('');
    const [name, setName] = useState('')
    const [urlFInal, SetUrlFinal] = useState('')
    const titulo = "CutURL";
   

  async function short(){
    await fetch(`https://cutt.ly/api/api.php?key=adabfd627281d315db28ec33e9f1789d86d3c&short=${url}&name=${name}`)
    .then(async response => {
      const data = await response.json();
      SetUrlFinal(data.url.shortLink)
    })
    .catch(error => {
      alert('API indisoponível no momento!')
    });
  }
    
  
    return (
     
     <Container>
         
         
          <Titulo>
          <span>{titulo.slice(0, 3)}</span>
           {titulo.slice(3)}
          </Titulo>
          
          <Input
          onChange={(event) => setUrl(event.target.value)}
          value={url}
          placeholder="Nome personalizado"   
          />

          <Input
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="Nome personalizado" 
          />

          <Botao onClick={() => short()}>
            <h1 style={{color: '#000', fontSize: 20}}>Encurtar</h1>
          </Botao>

           
          <h1>{urlFInal}</h1>
          
          
      </Container>
  
  
  );
}

