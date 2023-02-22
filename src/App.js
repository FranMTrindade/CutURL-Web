import React, { useState } from 'react'
import { Container, Titulo, Input, Botao } from './styles';






export default function App() {

  

    const [url, setUrl] = useState('');
    const [name, setName] = useState('')
    const [urlFInal, SetUrlFinal] = useState('')
    const titulo = "CutURL";
   
    

    
    const short = async () => {
      await fetch(`https://cutt.ly/api/api.php?key=adabfd627281d315db28ec33e9f1789d86d3c&short=${url}&name=${name}`)
        .then(async response => {
          const data = await response.json();
          SetUrlFinal(data.url.shortLink)
          
        })
        .catch(error => {
          console.log('Ocorreu um erro na chamada fetch:', error);
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

/*const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9fe'
  },
  title:{
    color: '#000',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 20,
  },
  input:{
    height: 50,
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    fontSize: 20,
    backgroundColor:'#FFF'
  },
  btn:{
    borderRadius: 4,
    height: 50,
    width: '80%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D2D',
  },
  newUrl:{
    height: 40,
    width: '80%',
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center'
  }
})*/