import React from 'react'
import Header from '../components/Header'

const Layout = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <hr/>
      <Component {...pageProps} />
    </div>
  )
}

export default Layout
