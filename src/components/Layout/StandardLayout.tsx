import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

// interface IStandardLayoutProps {
//   name: string;
// }

const StandardLayout = (/*{ name }: IStandardLayoutProps*/ props: any) => {
  return (
    <>
      <Header/>
      <div>
        {props.children}
      </div>
      <Footer/>
    </>
  )
}

export default StandardLayout