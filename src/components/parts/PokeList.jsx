import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import { useDispatch, useSelector } from 'react-redux';


export const PokeList = ({ banderaSalida }) => {


    const { FavoritesReducer } = useSelector(state => state)



    useEffect(() => {
        console.log(FavoritesReducer)
    }, [banderaSalida])



    return (
        <div className="contenedorList">

            <List >
                {

                    FavoritesReducer.length > 0
                        ? FavoritesReducer.map((p, i) => {

                            return <ListItem style={{ cursor: 'pointer' }} key={p.name + i}
                            >
                                <ListItemAvatar>

                                    <img src={p.image} style={{ objectFit: 'cover', width: '65px', height: '65px' }} />
                                </ListItemAvatar>
                                <ListItemText primary={p.name} />
                            </ListItem>
                        })

                        :
                        <p>Ingresa algo</p>
                }


            </List>

        </div>
    )
}
