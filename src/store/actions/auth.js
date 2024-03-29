import axios from "axios";

const authStart = () => {
  return {
    type: "AUTH_START",
  };
};

const authSuccess = (token, userId) => {
  return {
    type: "AUTH_SUCCESS",
    idToken: token,
    userId: userId,
  };
};

const authFail = (error) => {
  return {
    type: "AUTH_FAIL",
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");

  const deviceOs = localStorage.getItem("deviceOs");
  if (deviceOs) {
    localStorage.removeItem("deviceOs");
  }

  return {
    type: "AUTH_LOGOUT",
  };
};

const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const googleApiBaseUrl = process.env.REACT_APP_GOOGLE_BASE_URL;
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url = `${googleApiBaseUrl}:signInWithPassword?key=${apiKey}`;
    if (isSignup) {
      url = `${googleApiBaseUrl}:signUp?key=${apiKey}`;
    }

    axios
      .post(url, authData)
      .then((response) => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );

        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);

        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: "AUTH_SET_REDIRECT_PATH",
    path: path,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        //console.log(expirationDate);
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

export const setSignUpState = (isSignUp) => {
  return {
    type: "AUTH_SET_SIGNUP",
    isSignUp: isSignUp,
  };
};
