import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { Logout } from '../reducers/AuthReducerDuck'
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles({
  root: {

    background: "#15a1ad",
    color: "white",

  },
  button: {

    color: 'white'
  }
});


export const Footer = () => {

  const classes = useStyles();
  const [value, setValue] = useState(0);



  useEffect(() => {
    let val =  parseFloat( localStorage.getItem('value')|| 0);  
    setValue(val);
  
  }, [])



  let h = useHistory();

  const dispatch = useDispatch();


  return (
    <footer>


      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          localStorage.setItem('value', newValue)
          setValue(newValue); 
        }}
        className={classes.root}

      >
        <BottomNavigationAction label="Home" className={classes.button} 
         onClick={()=>{

          h.push('/')

         }}
         icon={<HomeIcon className={classes.button} />} 
         />


        <BottomNavigationAction label="Favorites" 
        onClick={() => {
        
            h.push('/hola')
    
        }} icon={<FavoriteIcon className={classes.button} />} />


        <BottomNavigationAction label="Logout"
          onClick={() => {
            dispatch(Logout());

          }}
          icon={<ExitToAppIcon className={classes.button} />} />
      </BottomNavigation>


    </footer>
  )
}
