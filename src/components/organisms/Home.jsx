import React from "react";

export default function Home() {
    return (
        <div className="home-background">
            <div className="home-container">

               
                <div className="home-video">
                    <video autoPlay loop muted>
                        <source src="/video/VIDEO-DOC.mp4" type="video/mp4" />
                    </video>
                </div>

              
                <div className="home-welcome">
                    <h1>Bienvenida </h1>
                    <h2 className="home-welcome-h2">Srta. Jhanet Chávez</h2>
                    <p className="welcome-desc">
                        Eres el filtro y el conector de toda la clínica. La información fluye gracias a tu atención y profesionalismo. 
                    </p>
                    <p className="welcome-slogan"> ¡Ten un excelente Día!</p>

                    <input 
                        type="date"
                        className="welcome-calendar"
                    />
                </div>

            </div>
        </div>
    );
}