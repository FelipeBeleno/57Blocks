import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { callApi } from '../helpers/callApi';
import { PokeCard } from './parts/PokeCard';
import { PokeList } from './parts/PokeList'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';
import { useSelector } from 'react-redux';





export const Index = () => {





  useEffect(() => {
    llamadaInicial();
  }, [])


  const [pokeList, setPokeList] = useState([])
  const [offSet, setOffSet] = useState(0);
  const [banderaSalida, setBanderaSalida] = useState(false);



  const llamadaInicial = async () => {

    let respuesta = await callApi(`pokemon?offset=${offSet}&limit=20`);

    let { results: pokemones } = respuesta;


    setPokeList(pokemones)
  }


  const handleChangePage =async (action)=>{

    if(action ==="next"){
      let num = offSet+20;

      let respuesta = await callApi(`pokemon?offset=${num}&limit=20`);

      let { results: pokemones } = respuesta;
  
  
      setPokeList(pokemones)

      setOffSet(num)


    }
    else if(action ==="back"){
      let num = offSet-20;

      let respuesta = await callApi(`pokemon?offset=${num}&limit=20`);

      let { results: pokemones } = respuesta;
  
  
      setPokeList(pokemones)
      setOffSet(num)


    }

    setBanderaSalida(!banderaSalida);




  }




  return <div className="row container p-5 ">

    <div className="col-md-4 col-sm-5">
      <h1>lista</h1>
      <PokeList banderaSalida={banderaSalida} />
    </div>
    <div className="col-md-8 col-sm-7" style={{ textAlign: 'center' }} >

      <h1>Pokemons</h1>
      <br />
      <div className="contenedorCards">

        <div className="row ">

          {
            pokeList?.length >= 1
              ? pokeList?.map((p) => {

                return <PokeCard key={p.url} name={p.name} url={p.url} setBanderaSalida={setBanderaSalida} banderaSalida={banderaSalida} />
              })
              : <h1>no</h1>

          }




        </div>
      </div>
      <div className="container d-flex justify-content-center">


          {
          offSet !==0
          &&
        <IconButton aria-label="delete" onClick={()=>{
          handleChangePage('back');
        }}>

          <NavigateBeforeIcon />

        </IconButton>
          }


        <IconButton aria-label="delete" onClick={()=>{
          handleChangePage('next');
        }}>
          <NavigateNextIcon />
        </IconButton>

      </div>
    </div>

  </div>
};
