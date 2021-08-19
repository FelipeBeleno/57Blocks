import React, { Fragment, useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { Button, CardContent, InputAdornment, TextField } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import {Login} from '../../reducers/AuthReducerDuck';
import poke from '../../img/pokeball.png'


export const LoginScreen = () => {

  const dispatch = useDispatch()
  const {AuthReducer} = useSelector(state => state)


  useEffect(() => {
    

  }, [])



  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  })





  const [checkPass, setCheckPass] = useState(false)


  const cambioForm = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    });
  }



  const handleSubmit = () => {
    const dataForm = formValues
    dispatch(Login(dataForm));

  }


  return (
    <Fragment>
      <div className="containerf">
        <div className="prtd">
        
        </div>

        <div className="prti">
          <Card className="card">
            <CardContent>
              <div className="titleCard">
                <h1>Poke Api</h1>
                <img src={poke} className="imgPoke" alt=""/>
              </div>
              <br />
              <TextField className="inp"
                id="username" label="Username" name="username" onChange={e => cambioForm(e)} 
                
                value={formValues.username}
                />
              <br />
              <br />


              <TextField
                id="pass"
                label="Password"
                name="password"
                onChange={e => cambioForm(e)}
                type={checkPass ? "Text" : "Password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" >
                      {
                        checkPass
                          ?
                          <VisibilityOffIcon style={{ cursor: 'pointer' }} onClick={() => setCheckPass(false)} />
                          :
                          <VisibilityIcon style={{ cursor: 'pointer' }} onClick={() => setCheckPass(true)} />

                      }
                    </InputAdornment>
                  ),
                }}
                className="inp"
                value={formValues.password}
              />

              <br />
              <br />
              <Button color="primary" variant="contained" style={{ width: '100%', color:'white' }} onClick={handleSubmit}>log in</Button>
            </CardContent>


          </Card>

        </div>
      </div>
    </Fragment>
  );
};
