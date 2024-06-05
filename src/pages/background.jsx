import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import homeBackground from '../assets/img/Asset1.svg';
import gameMode3 from '../assets/img/Pista3.png';
import gameMode1 from '../assets/img/Pista1.png';
import gameMode2 from '../assets/img/Pista2.png';
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const Background = () => {
    const location = useLocation();
    const { log } = useContext(AuthContext);
    useEffect(() => {
        const { pathname } = location;
        let backgroundImage;
        console.log(log);
        switch (pathname) {
        
            case '/Game':
                if (log.pista === "pista1") {
                    backgroundImage = `url(${gameMode1})`;
                }
                else if(log.pista === "pista2"){
                    backgroundImage = `url(${gameMode2})`;
                }else{
                    backgroundImage = `url(${gameMode3})`;
                }
                break;
            case '/loginGame':

                backgroundImage = `url(${homeBackground})`;


                break;

            default:
                backgroundImage = `url(${homeBackground})`;
        }

        document.body.style.backgroundImage = backgroundImage;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.height = '100vh';
        document.body.style.margin = 0;
        document.body.style.overflow = 'hidden'; // Bloquear el desplazamiento
        return () => {
            document.body.style.backgroundImage = homeBackground;
        };
    }, [location]);

    return null;
}

export default Background;
