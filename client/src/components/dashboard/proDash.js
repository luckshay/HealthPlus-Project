import React from 'react';
import {Link} from "react-router-dom";
import "../../styles/Dashboard.css";
import { proMenu } from "../../data/side_bar_data";


const proDash = () => {
  return (
    <>
      <div className='main'>
        <div className='layout'>
          <div className='sidebar'>
            <div className='logo'>
              <img src={require("../../assets/logo/Health-Plus Logo 2.png")} alt="logo" />
              <h1>HealthPlus</h1>
            </div>
            <hr />
            <div className='menu'>
              {proMenu.map(menu => {
                return (
                  <>
                  <div className='menu-item'>
                    <i className={menu.icon}></i>
                    <p><Link to ={menu.path}>{menu.name}</Link></p>
                  </div>
                  </>
                )
              })}
            </div>
          </div>
          <div className='content'>
            <div className='body'>Body</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default proDash
