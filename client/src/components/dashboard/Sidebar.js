import React from 'react';
import { Link } from "react-router-dom";
import { recipientMenu, proMenu } from "../../data/side_bar_data";

const Sidebar = (props) => {
  const { setSelectedMenu } = props;
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };
  return (
    <>
      <div className='hpsidebar'>
        <div className='hplogo'>
          <img src={require("../../assets/logo/Health-Plus Logo 2.png")} alt="logo" />
          <h1>HealthPlus</h1>
        </div>
        <hr />
        {props.userType === "Recipient" && (
          <div className='hpmenu'>
            {recipientMenu.map(menu => {
              return (
                <>
                  <div className='hpmenu-item' key={menu.name+Math.random()}>
                    <div className='hpmenu-icon'><menu.icon size="1.7rem" /></div>
                    <p><Link to={menu.path} onClick={() => handleMenuClick(menu.name)}>{menu.name}</Link></p>
                  </div>
                </>
              )
            })}
          </div>
        )}
        {props.userType === "Healthcare Professional" && (
          <div className='hpmenu'>
            {proMenu.map(menu => {
              return (
                <>
                  <div className='hpmenu-item' key={menu.name+Math.random()} >
                    <div className='hpmenu-icon'>
                      <menu.icon size="1.7rem" /></div>
                    <p><Link to={menu.path} onClick={() => handleMenuClick(menu.name)}>{menu.name}</Link></p>
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
