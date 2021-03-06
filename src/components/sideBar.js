import React, { Component } from 'react';
import '../styles/topBarLower.css'
import classNames from 'classnames'
import { Link } from 'react-router-dom'



class topBarLower extends Component {

  render(){
    let activeButton = this.props.activeButton
    let dashboardActive = true
    if (activeButton !== '/dashboard'){
      dashboardActive = false
    }
    let dashboardButton = classNames({ 'item': true, 'itemActive': dashboardActive })
    let marketButton = classNames({ 'item': true, 'itemActive': !dashboardActive })
    return(
      <div className='topBarLower'>
        <div className='wrapper'>
          <Link to='/dashboard'>
            <div className={dashboardButton}>
              Dashboard
            </div>
          </Link>
          <Link to='/dashboard/market'>
            <div className={marketButton}>
              Market
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default topBarLower
