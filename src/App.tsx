import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import homepage from './icons/homepage.svg'
import livecasino from './icons/livecasino.svg'
import promotions from './icons/promotions.svg'
import contact from './icons/contact.svg'

function App() {
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      right: '-44px',
      height: '44px',
      width: '44px'
    },
    bmCross: {
      background: '#FFFFFF',
      height: '30px',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: 'linear-gradient(90deg, #F9E292 0%, #FAD73D 100%)',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block',
      fontFamily: 'Nunito',
      fontStyle: 'normal',
      fontWeight: 800,
      fontSize: '16px',
      lineHeight: '114.4%',
      color: '#000000'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.6)'
    }
  }
  return (
    <Menu styles={styles}>
      <ul className="list-unstyled ms-2">
        <li>
          <div className="menuItem mb-4">
            <img src={homepage}/> <span className="ms-2">Homepage</span>
            <hr className="activeMenu"/>
          </div>
        </li>
        <li>
          <div className="menuItem mb-4">
            <img src={livecasino}/> <span className="ms-2">Live Casino</span>
          </div>
        </li>
        <li>
          <div className="menuItem mb-4">
            <img src={promotions}/> <span className="ms-2">Promotions</span>
          </div>
        </li>
        <li>
          <div className="menuItem mb-4">
            <img src={contact}/> <span className="ms-2">Contact</span>
          </div>
        </li>
      </ul>
    </Menu>
  )
}

export default App;
