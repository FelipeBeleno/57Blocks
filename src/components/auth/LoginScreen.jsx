import React, { Fragment, useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { Button, CardContent, InputAdornment, TextField } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../reducers/AuthReducerDuck';
import poke from '../../img/pokeball.png'


export const LoginScreen = () => {

  const dispatch = useDispatch()
  const { AuthReducer } = useSelector(state => state)


  const [errorName, setErrorName] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [generalError, setGeneralError] = useState(false);




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



    setErrorName(false);
    setErrorPass(false)

    let pass = JSON.parse(localStorage.getItem("user"));



    if (formValues.username.length >= 3) {

      setErrorName(true);

    }

    if (formValues.password.length >= 3) {

      setErrorPass(true)
    }

    if (errorName == true || errorName === true) {

      return;

    }





    if (pass.user !== formValues.username || pass.pass !== formValues.password) {
      setGeneralError(true);

    } else {



      const dataForm = formValues
      dispatch(Login(dataForm));

    }



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
                <img src={poke} className="imgPoke" alt="" />
              </div>
              <br />
              <TextField className="inp"
                id="username" label="Username" name="username" onChange={e => cambioForm(e)}

                value={formValues.username}
              />
              <span style={{ color: 'red' }} >{errorName === false && 'minimum three characters'}</span>
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
              <span style={{ color: 'red' }} >{errorPass === false && 'minimum three characters'}</span>

              <br />
              <span style={{ color: 'red' }} >{generalError !== false && 'Is invalid name or password'}</span>
              <br />
              <Button color="primary" variant="contained" style={{ width: '100%', color: 'white' }} onClick={handleSubmit}>log in</Button>
            </CardContent>


          </Card>

        </div>
      </div>
    </Fragment>
  );
};
