// initialstate

let initialstate = {
  status: localStorage.getItem('status') || false,
  user: null,
  errorStatus: false,
  error: {
    status: false,
    msj: ''

  }
};
const types = {
  login: '[Auth] Login',
  logout: '[Auth] Logout'
};

// reducer

export const AuthReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.login:

      let { username, password } = action.payload;
      let { user, pass } = JSON.parse(localStorage.getItem('user'))

      if (username === user && pass === password) {

        state = {
          status: true,
          user: username
        }


        localStorage.setItem('status', true)

      } else {
        state = {
          ...state,
          error: {
            msj: 'invalid  username or password'

          },
          errorStatus: true
        }
      }


      return state;


    case types.logout:


      localStorage.removeItem("status");

      state = {
        status: localStorage.getItem('status') || false,
        user: null,
        errorStatus: false,
        error: {
          status: false,
          msj: ''
      
        }
      };


      return state;
    default:
      return state;
  }
};

// actions

export const Login = (obj) => {
  return async (dispatch) => {

    dispatch({
      type: types.login,
      payload: obj
    });



  };
};


export const Logout = () => {

  return (dispatch) => {


    dispatch({
      type: types.logout
    });



  };
};



