import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const clientId = '336949575457-14rodk87br7n903sps9cd8497d054ssb.apps.googleusercontent.com';

const Dashboard = () => {
  let history = useHistory();

  const onLogoutSuccess = () => {
    toast.success('登出成功', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, });
    // localStorage.removeItem('loginID');
    localStorage.removeItem('myname');
    history.push('/');
  };
  const onFailure = (res) => {
    console.log('res:', res);
  };
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <div>
      {/* <h4> Insert Id : {JSON.parse(localStorage.getItem('myname'))} </h4> */}
      <h4>  嗨 !  {localStorage.myname} </h4>
      <button onClick={signOut} className="gr__log__button">Logout</button>
    </div>
  )
}

export default Dashboard
