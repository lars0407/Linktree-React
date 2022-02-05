import React from 'react'

import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
        <span>{props.text}</span>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'Instagram',
  image_alt: 'image',
  image_src: '/playground_assets/token%20name%3Dbps-200h.png',
  rootClassName: '',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
