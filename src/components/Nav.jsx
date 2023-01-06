import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='Nav '>
        <ul className=' nav'>
            <li className="nav-item">
                <Link className=" nav-link" to="/">restCountry</Link>
            </li>
        </ul>
    </div>
  )
}
