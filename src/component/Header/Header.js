import React from 'react';
import '../Header/Header.css';
import IMG from '../img/blub.png'
import IMG1 from '../img/3 lines.jpg'
import search from '../img/search1.png'
import icon from '../img/refresh.png'
import setting from '../img/setting.png'
import apps from '../img/apps.png'
import loginIcon from '../img/icon5.jpg'
// Tell webpack that Header.js uses these styles

const Header = () => {
    return (
          <div className='box'>
              <div className='box1'>
                   <div className='boxa'>
                      <img src={ IMG1 }  alt="Headerone"/>
                  </div>
                <div className='boxb'>
                     <img src={IMG}  alt="haederTwo"/>
                 </div>
                    <div class="boxc">
                      
                          <h1><b>Keep</b></h1>
                       
                 </div> 
            </div>

        <div className='box2'>
           <div className='boxd'>
             <img src={search}  alt="SearchIcon"/>
        </div>
        <div class="boxe">
            <input type="text" class="searchbar" placeholder='search' />
         </div>
    </div>
    <div className='icons'>
         <div class="boxf">
                <img src={icon}  alt="IconImage"/>
            </div>
            <div class="boxg">
                <img src={apps}  alt="AppIcon"/>
            </div>
            <div class="boxh">
                <img src={setting}  alt="sSettingImage"/>

            </div>
            <div class="boxi">
                <img src={loginIcon}  alt="SettingImage"/>
        </div>
            </div>
    </div>
    
    )
}
export default Header