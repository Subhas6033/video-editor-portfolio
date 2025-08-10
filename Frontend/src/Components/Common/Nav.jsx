import React from 'react'
import {useNavigate} from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      slug : "/"
    }, {
      name: "About me",
      slug : "/about"
    }, {
      name: "My Work",
      slug : "/work"
    }, {
      name: "Contact me",
      slug : "/contact"
    }
  ]

  return (
    <nav>
      <ul>
        {navItems.map((nav) => (
          <li key={nav.name}
          onClick={()=> navigate(nav.slug)}
          >
            {nav.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav
