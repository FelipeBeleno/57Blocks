import React, { useState, useEffect } from 'react';
import { Card, CardContent, IconButton } from '@material-ui/core';
import { callApi } from '../../helpers/callApi';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, removeFavorites, consultFavorites } from '../../reducers/FavoritesReducerDuck';

export const PokeCard = ({ url, name, setBanderaSalida, banderaSalida }) => {

    const [pokeMost, setPokeMost] = useState("");
    useEffect(() => {
        pokeProps();




        if (pokeMost) {



            FavoritesReducer.forEach(d => {

                if (d.id == pokeMost.id) {
                    setPokeCache(d);
                }

            });

        }
    }, [])


    const { FavoritesReducer } = useSelector(state => state)
    const [pokeCache, setPokeCache] = useState(false);

    const dispatch = useDispatch();




    const pokeProps = async () => {


        let respuesta = await callApi('', url);

        setPokeMost({ name, image: respuesta.sprites.front_default, id: respuesta.id, favorite: false })



    }



    const handleFavorite = () => {

        let { favorite: favor } = pokeMost

        let pok = pokeMost;

        pok.favorite = !favor

        setPokeMost({
            ...pokeMost,
            favorite: !favor

        })


        if (pok.favorite === true) {
            dispatch(addFavorites(pokeMost))

        } else {

            dispatch(removeFavorites(pokeMost))
        }


        setBanderaSalida(d => !d);

    }




    return (
        <div className="col-md-4 col-sm-6 " >
        <Card style={{ minWidth: 'auto', minHeight: '200px', background: '#15a1ad', color: 'white' }}>
            <CardContent style={{ flexDirection: 'column', textAlign: 'center' }}>

                <img src={pokeMost.image} />



                <span>{name}</span>
            </CardContent>
            <div style={{ textAlign: 'center' }}>

                <IconButton aria-label="delete" onClick={() => {
                    handleFavorite();
                }}>
                    {

                        pokeMost.favorite
                            ?
                            <FavoriteIcon style={{ color: 'red' }} />
                            : <FavoriteBorderIcon style={{ color: 'white' }} />
                    }
                </IconButton>
            </div>

        </Card>
        <br />
    </div>
    )
}
