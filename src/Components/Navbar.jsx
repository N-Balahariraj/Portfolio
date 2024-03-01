import React from 'react'

export default function Navbar({selMenu}) {
  return (
    <nav>
        <li onClick={()=>selMenu(1)}>
            <box-icon type="solid" name="home"></box-icon>
        </li>
        <li onClick={()=>selMenu(2)}>
            <box-icon type="solid" name="user"></box-icon>
        </li>
        <li onClick={()=>selMenu(3)}>
            <i className="fa-solid fa-brain"></i>
        </li>
        <li onClick={()=>selMenu(4)}>
            <i className="fa-solid fa-clipboard-list"></i>
        </li>
        <li onClick={()=>selMenu(5)}>
            <i className="fa-solid fa-phone"></i>
        </li>
    </nav>
  )
}
