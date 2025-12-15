import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../organisms/Navbar'
import Home from "../organisms/Home"
import Pediatria from "../pages/Pediatria"
import Ginecologia from "./Ginecologia";
import ConsultoriaMedica from './ConsultoriaMedica'

export default function Dashboard() {
    const [section, setSection] = useState('HOME')
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const userData = localStorage.getItem('user')


        if (!userData || userData === 'undefined' || userData === 'null') {
            navigate('/')
            return
        }


        try {
            const parsedUser = JSON.parse(userData)


            if (parsedUser && parsedUser.email) {
                setUser(parsedUser)
            } else {

                localStorage.removeItem('user')
                navigate('/')
            }
        } catch (error) {
            console.error('Error al cargar usuario:', error)

            localStorage.removeItem('user')
            navigate('/')
        } finally {
            setLoading(false)
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('user')
        setUser(null)
        navigate('/')
    }


    if (loading) {
        return <div style={{ padding: '2rem', textAlign: 'center' }}>Cargando...</div>
    }


    if (!user) {
        return null
    }

    return (
        <div className="dashboard-root">
            <Navbar user={user} onLogout={handleLogout} onSelect={setSection} />
            <main className="dashboard-content">

                {section === 'HOME' && <Home user={user} />}

                {section === 'PEDIATRIA' && <Pediatria />}

                {section === 'GINECOLOGIA' && <Ginecologia />}

                {section === 'CONSULTORIA' && <ConsultoriaMedica />}
            </main>

        </div>
    )
}