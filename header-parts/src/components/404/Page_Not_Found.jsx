import React from 'react'
import style from './Page_Not_Found.module.css';
import Curve from '../curve2/Curve';


const Page_Not_Found = () => {
  return (
    <>
      <Curve />

      <div className={style.main_container}>
        <div className={style.Page_not_found}>


          <p>
            <strong style={{
              fontSize: "100px",
              backgroundColor: "white",
              borderRadius: "20px",
            }}>
              404
            </strong>
          </p>

          <p>
            Page Not Found
          </p>
        </div>
      </div>
    </>
  )
}

export default Page_Not_Found