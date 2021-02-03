import React from 'react'
import { useMediaQuery } from 'react-responsive'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar = () => { 
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1023px)'
  })
  return (isTabletOrMobileDevice ? <MobileNav /> : <DesktopNav /> )
}

export default Navbar