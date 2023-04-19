import React from 'react';
import { Link } from "react-router-dom";
import { recipientMenu, proMenu } from "../../data/side_bar_data";

const Sidebar = (props) => {
  return (
    <>
   {/* {console.log(props.userType)} */}
    {/* {props.userType} */}
      <div className='sidebar'>
        <div className='logo'>
          <img src={require("../../assets/logo/Health-Plus Logo 2.png")} alt="logo" />
          <h1>HealthPlus</h1>
        </div>
        <hr />
        {props.userType === "Recipient" && (
          <div className='menu'>
            {recipientMenu.map(menu => {
              return (
                <>
                  <div className='menu-item'>
                    <menu.icon />
                    <p><Link to={menu.path}>{menu.name}</Link></p>
                  </div>
                </>
              )
            })}
          </div>
        )}
        {props.userType === "Healthcare Professional" && (
          <div className='menu'>
            {proMenu.map(menu => {
              return (
                <>
                  <div className='menu-item'>
                    <menu.icon />
                    <p><Link to={menu.path}>{menu.name}</Link></p>
                  </div>
                </>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default Sidebar
