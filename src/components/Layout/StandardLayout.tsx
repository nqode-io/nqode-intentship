import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

interface StandardLayoutProps {
  children: JSX.Element;
}

const StandardLayout = ({children} : StandardLayoutProps) => {
  return (
    <>
      <Header/>
        <div>
          {children}
        </div>
      <Footer/>
    </>
  )
}

export default StandardLayout