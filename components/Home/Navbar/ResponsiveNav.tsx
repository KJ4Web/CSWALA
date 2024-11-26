'use client'

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

    const [showNav,setShownNav]=useState(false)

    const showNavHandler =()=>setShownNav(true)
    const hideNavHandler =()=>setShownNav(false)

  return (
    <>
        <Nav openNav={showNavHandler} />
        <MobileNav showNav={showNav} closeNav={hideNavHandler} />
    </>
  )
}

export default ResponsiveNav