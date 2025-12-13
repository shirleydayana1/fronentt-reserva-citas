import React, { useState, useRef, useEffect } from 'react'

export default function Navbar({ user, onLogout, onSelect }) {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        function click(e) { 
            if (ref.current && !ref.current.contains(e.target)) setOpen(false) 
        }
        document.addEventListener('click', click)
        return () => document.removeEventListener('click', click)
    }, [])

    return (
        <nav className="navbar">
            <div className="nav-left">
                <img src="/img/logo.png" alt="Logo" className="nav-logo" />
                <span className="clinic-name" onClick={() => onSelect('HOME')}> Alcantara</span>
            </div>

            <ul className="nav-links">
                <li onClick={() => onSelect('PEDIATRIA')}>PEDIATRÍA</li>
                <li onClick={() => onSelect('GINECOLOGIA')}>GINECOLOGÍA</li>
                <li onClick={() => onSelect('CONSULTORIA')}>CONSULTORÍA MÉDICA</li>
            </ul>

            <div className="profile" ref={ref}>
                <button className="profile-button" onClick={() => setOpen(!open)}>
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-4.4 0-8 3.1-8 7v1h16v-1c0-3.9-3.6-7-8-7z" fill="currentColor" />
                    </svg>
                    {user?.name || 'Jhanet Acosta'}
                </button>
                <div className={`dropdown ${open ? 'open' : ''}`}>
                    <button onClick={onLogout} className="dropdown-item">Cerrar sesión</button>
                </div>
            </div>
        </nav>
    )
}