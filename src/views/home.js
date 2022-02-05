import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Linktree</title>
        <meta property="og:title" content="Linktree" />
      </Helmet>
      <div className={styles['container1']}>
        <img
          alt="image"
          src="/playground_assets/image-1500w.png"
          className={styles['image']}
        />
      </div>
      <AppComponent></AppComponent>
      <AppComponent></AppComponent>
      <AppComponent></AppComponent>
      <AppComponent></AppComponent>
      <AppComponent></AppComponent>
    </div>
  )
}

export default Home
