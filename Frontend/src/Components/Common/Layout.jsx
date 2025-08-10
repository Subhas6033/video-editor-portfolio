import React from 'react'

const Layout = ({
    className = "",
    children
}) => {
  return (
    <div className={`w-full min-h-screen ${className}`}>
      {children}
    </div>
  )
}

export default Layout
