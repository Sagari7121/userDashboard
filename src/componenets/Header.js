
import './Header.css'
import React from 'react';
import { useNavigate} from 'react-router-dom'

export default function Header({path=false}){

    let navigate=useNavigate();

    function handleOnClick(){
      navigate('/user/new')
    }
    return <nav className="header">
        <img src="../users.png" alt="logo" />
        <button onClick={handleOnClick} className={path===true ? 'active':''}>New user</button>
    </nav>
}