import { NextPage } from 'next'
import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

const Login: NextPage = () => {
  return (
    <div className="container">
      <div className="login-form text-center m-auto card px-5 rounded-15 pb-5">
        <div className="title font-size-50 mt-5 mb-2 font-weight-900">Login</div>
        <div className="mt-3 mb-3">
          <InputText placeholder="Email" className="p-inputtext" />
        </div>
        <div className="mt-3 mb-3">
          <Password mediumRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})" 
          placeholder='Password' className="password"
          inputClassName='w-100' toggleMask
          />
        </div>
        <div className="form-group">
          <button className="w-100 btn btn-primary mt-4 mb-2 text-white font-weight-900">Log in</button>
        </div>
        <div className=" text-end mb-3">
          <a href="" className="forgot-password">
            Forgot Password?
          </a>
        </div>
        <div className="form-group mt-3 mb-1 p-1 rounded-8 row">
          <div className="col-4 text-end">
            <svg width="26" height="26" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9393 0.575783C22.3648 0.614871 25.4593 1.45674 28.223 3.10139C30.9537 4.71321 33.2252 6.99864 34.8204 9.73912C36.455 12.5194 37.2918 15.6327 37.3308 19.079C37.2337 23.7944 35.7464 27.8218 32.869 31.1612C29.9915 34.5006 26.3062 36.5665 22.4912 37.3585V24.1381H26.098L26.9136 18.9428H21.4521V15.54C21.4218 14.8346 21.6449 14.1416 22.081 13.5863C22.5178 13.0295 23.287 12.7369 24.3885 12.7084H27.6865V8.15743C27.6392 8.1422 27.1901 8.082 26.3394 7.97681C25.3746 7.86392 24.4044 7.80363 23.433 7.79619C21.2345 7.80633 19.4958 8.42649 18.2168 9.65666C16.9379 10.8865 16.2845 12.6658 16.2568 14.9945V18.9428H12.1006V24.1381H16.2568V37.3585C11.5725 36.5665 7.88718 34.5006 5.00972 31.1612C2.13226 27.8218 0.645067 23.7944 0.547974 19.079C0.58682 15.6326 1.4236 12.5193 3.05832 9.73912C4.65348 6.99864 6.92503 4.71322 9.65575 3.10139C12.4193 1.45706 15.5139 0.615188 18.9393 0.575783Z"
                fill="#3764B9"
              />
            </svg>
          </div>
          <div className="col-8 text-start d-flex align-items-center">
            <a href="">Sign up with Facebook</a>
          </div>
        </div>
        <div className="form-group mt-1 mb-3 p-1 rounded-8 row">
          <div className="col-4 text-end">
            <svg width="26" height="26" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M35.061 15.8754H20.9223C20.2989 15.8754 19.7942 16.3801 19.7942 17.0035V21.5234C19.7942 22.1469 20.2989 22.6516 20.9223 22.6516H28.886C28.0176 24.9152 26.3848 26.8078 24.3141 28.0102L27.7059 33.8883C33.1461 30.7414 36.3672 25.2121 36.3672 19.0297C36.3672 18.1465 36.3004 17.5156 36.1743 16.8106C36.0704 16.2688 35.6028 15.8754 35.061 15.8754Z"
                fill="#167EE6"
              />
              <path
                d="M19.0371 29.4352C15.1406 29.4352 11.7414 27.3051 9.9156 24.1582L4.03748 27.5426C7.02849 32.7305 12.632 36.2188 19.0371 36.2188C22.184 36.2188 25.1453 35.3727 27.7058 33.8957V33.8883L24.314 28.0102C22.7554 28.9156 20.9594 29.4352 19.0371 29.4352Z"
                fill="#12B347"
              />
              <path
                d="M27.6984 33.8957V33.8883L24.3066 28.0102C22.7555 28.9082 20.9594 29.4352 19.0371 29.4352V36.2188C22.184 36.2188 25.1453 35.3727 27.6984 33.8957Z"
                fill="#0F993E"
              />
              <path
                d="M8.49062 18.8887C8.49062 16.9664 9.01758 15.1703 9.91563 13.6191L4.0375 10.2348C2.55313 12.7805 1.70703 15.7344 1.70703 18.8887C1.70703 22.043 2.55313 24.9969 4.0375 27.5426L9.91563 24.1582C9.01016 22.607 8.49062 20.8109 8.49062 18.8887Z"
                fill="#FFD500"
              />
              <path
                d="M19.0371 8.34219C21.5754 8.34219 23.9133 9.24766 25.7316 10.7469C26.1844 11.118 26.8375 11.0883 27.2457 10.6801L30.4445 7.48125C30.9121 7.01367 30.875 6.24922 30.3777 5.81875C27.3273 3.16172 23.3566 1.55859 19.0371 1.55859C12.632 1.55859 7.02849 5.04687 4.03748 10.2348L9.9156 13.6191C11.7414 10.4723 15.1406 8.34219 19.0371 8.34219Z"
                fill="#FF4B26"
              />
              <path
                d="M25.7316 10.7469C26.1844 11.118 26.8375 11.0883 27.2457 10.6801L30.4445 7.48125C30.9121 7.01367 30.875 6.24922 30.3777 5.81875C27.3273 3.16172 23.3566 1.55859 19.0371 1.55859V8.34219C21.5754 8.34219 23.9133 9.24023 25.7316 10.7469Z"
                fill="#D93F21"
              />
            </svg>
          </div>

          <div className="col-8 text-start d-flex align-items-center">
            <a href="">Sign up with Google</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
