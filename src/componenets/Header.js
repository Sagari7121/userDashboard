
import './Header.css'
import React from 'react';
import { useNavigate} from 'react-router-dom'

export default function Header({path}){

    let navigate=useNavigate();

    function handleOnClick(){
      navigate('/newuser')
    }
    return <nav className="header">
        <img src="../users.png" alt="logo" />
        <button onClick={handleOnClick} className={path==='/newuser' ? 'active':''}>New user</button>
    </nav>
}