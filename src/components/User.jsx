import React from 'react'
import './User.css'
export default function User(props) {
  return (
    <div className='User'>
        <img src={props.image} alt=" profile" />
        <div>
            <div className='FullName'>{props.nom}</div>
            <button onClick={props.details}>Detail User</button>
            <button onClick={props.listeTaches}>Liste des taches</button>
        </div>
    </div>
  )
}

