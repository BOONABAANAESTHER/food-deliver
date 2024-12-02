import React from 'react'
import './AppDownload.css'
import {images} from '../../images/images'

const AppDownload = () => {
  return (
    <div className=' app-download' id='app-download'>
      <p>For Experience Download <br />Food APP</p>
      <div className="app-download-platforms">
        <img src={images.play_store} alt="" />
        <img src={images.app_store} alt="" />
      </div>

    </div>
  )
}

export default AppDownload