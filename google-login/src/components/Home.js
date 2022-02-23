import React from 'react'
import GoogleLogin from "./GoogleLogin";

const Home = () => {
  return (
    <div>
      <h1>google login</h1>
      <div className="wrapper">
        <GoogleLogin text={"使用google登入"}/>
      </div>
    </div>
  )
}
export default Home


