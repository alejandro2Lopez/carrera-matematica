import React, { useContext, useEffect, useState, useCallback } from "react";
import car_red from "./imagenesJuego/Crojo.png";
import car_green from "./imagenesJuego/Cverde.png";
import car_yellow from "./imagenesJuego/Camarillo.png";
import { AuthContext } from "../context/AuthContext";

import airplane_blue from "./imagenesJuego/Aazul.png";
import airplane_black from "./imagenesJuego/Anegro.png";
import airplane_red from "./imagenesJuego/Arosa.png";
import spaceWhite from "./imagenesJuego/imgWhite.png";
import { message } from "../components/Message";
import { openModal, closeModal } from "../components/ModalF";
import "../assets/css/OcOrato---Login-form-styles.css";
import { compararNum } from "../components/Modegame";
const Game = () => {
    const { log } = useContext(AuthContext);
    const [getUsers, setUsers] = useState(true);
    const [team, setTeams] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const [nextplayer, setNextPlayer] = useState(0);
    const [transportList, setTransportList] = useState([]);
    const [refreshC, setRefreshC] = useState(true);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [showBackdrop, setShowBackdrop] = useState(false);
    const [nextPl, setNextPl] = useState(0);
    const getListUser = useCallback(() => {
        setTeams(log.teams);
    }, [log.teams]);
    const ListOfTeams = team.map((team, key) => {


        return (
            <div class="col">
                <button class="btn " style={{ backgroundColor: team.color, borderColor: team.color, color: "white" }} >{team.name}: {team.points}</button>
            </div>
        )
    });
    const setTeam = () => {
        setNextPlayer(1);

    }


    useEffect(() => {
        if (refresh) {
            setRefresh(false);
            if (getUsers) {
                getListUser();
                setUsers(false);
                message(`Sigue el equipo ${log.teams[0].name}`, "question", 3000);
                setTeam();
            }
        }


        // eslint-disable-next-line
    }, [refresh, nextplayer, getListUser, getUsers, log.teams])
    const nextQuestion = () => {
        if (log.topic === "mayormenor") {
            if (log.level === "level1") {
                openModal('Pregunta', setShowBackdrop);
                var nums = compararNum(100);
                const button1 = document.getElementById("Boton1Modal");
                const button2 = document.getElementById("Boton2Modal");
                const textobody = document.getElementById("bodyModalTexto");
                button1.innerText = `${nums[0]}`;
                button2.innerText = `${nums[1]}`;
                textobody.innerText = `${nums[2]}`;
                textobody.dataset.link = `${nums[3]}`;
            }

        }

    }
    const nextPL = () => {
        setNextPl(nextPl + 1);
    }
    const userN = () => {
        setNextPlayer(nextplayer + 1);
    }
    const nextPlayer = () => {
        if (nextPl === team.length - 1) {
            setNextPl(0);
        }


        if (nextplayer >= team.length) {
            setTeam();
            message(`Sigue el equipo ${team[0].name}`, "question", 3000);

        }
        else {
            nextPL();
            userN();
            message(`Sigue el equipo ${team[nextplayer].name}`, "question", 3000);
        }

    }
    const getPoint = (number) => {
        setTeams((prevTeams) => {
            return prevTeams.map((team, index) => {
                if (index === nextPl) {
                    return { ...team, points: team.points + number };
                }
                return team;
            });
        });
    };

    function encontrarGanador() {
        for (let i = 0; i < team.length; i++) {
            console.log(team[i].points)
            if (team[i].points >= 25) {
                return team[i];
            }
        }
        return null;
    }
    const checkMayorOmenor = (button) => {

        const button1 = document.getElementById("Boton1Modal");
        const button2 = document.getElementById("Boton2Modal");
        const textobody = document.getElementById("bodyModalTexto");

        if (button === "1") {
            if (textobody.dataset.link === "menor") {
                if (button1.innerText < button2.innerText) {
                    message('Respuesta correcta, lo has hecho excelente', "success", 2000);
                    closeModal("Pregunta", setShowBackdrop)
                    const ganador = encontrarGanador(log.teams);
                    if (ganador) {
                        message(`El ganador es: ${ganador.name}`, "success", 2000);

                    } else {
                        setTimeout(() => {
                            nextPlayer();
                            getPoint(5);
                        }, 1500);

                    }
                }
                else {
                    message('La respuesta es incorrecta.', "error", 1500);
                    setTimeout(() => {
                        nextPlayer();
                    }, 1500);

                }
            }
            else if (textobody.dataset.link === "mayor") {
                if (button1.innerText > button2.innerText) {
                    message('Respuesta correcta, lo has hecho excelente', "success", 1500);
                    closeModal("Pregunta", setShowBackdrop);
                    const ganador = encontrarGanador();
                    if (ganador) {
                        message(`El ganador es: ${ganador.name}`, "success", 2000);

                    } else {
                        setTimeout(() => {
                            nextPlayer();
                            getPoint(5);
                        }, 1500);

                    }
                }
                else {
                    message('La respuesta es incorrecta.', "error", 1500);
                    setTimeout(() => {
                        nextPlayer();
                    }, 1500);

                }
            }
        } else {
            if (textobody.dataset.link === "menor") {
                if (button1.innerText > button2.innerText) {
                    message('Respuesta correcta, lo has hecho excelente', "success", 1500);
                    closeModal("Pregunta", setShowBackdrop);
                    const ganador = encontrarGanador();
                    if (ganador) {
                        message(`El ganador es: ${ganador.name}`, "success", 2000);

                    } else {
                        setTimeout(() => {
                            nextPlayer();
                            getPoint(5);
                        }, 1500);


                    }
                }
                else {
                    message('La respuesta es incorrecta.', "error", 1500);
                    setTimeout(() => {
                        nextPlayer();
                    }, 1500);

                }
            }
            else if (textobody.dataset.link === "mayor") {
                if (button1.innerText < button2.innerText) {
                    message('Respuesta correcta, lo has hecho excelente', "success", 1500);
                    closeModal("Pregunta", setShowBackdrop);
                    const ganador = encontrarGanador(log.teams);
                    if (ganador) {
                        message(`El ganador es: ${ganador.name}`, "success", 2000);

                    } else {
                        setTimeout(() => {
                            nextPlayer();
                            getPoint(5);
                        }, 1500);

                    }
                }
                else {
                    message('La respuesta es incorrecta.', "error", 1500);
                    setTimeout(() => {
                        nextPlayer();
                    }, 1500);

                }
            }
        }







    }
    useEffect(() => {
        if (refreshC) {


            if (log.mode === "car") {
                setHeight(90);
                setWidth(160);
                log.teams.map((team, key) => {
                    if (team.color === "red") {
                        transportList.push(car_red);
                    } else if (team.color === "green") {

                        transportList.push(car_green);
                    } else if (team.color === "yellow") {

                        transportList.push(car_yellow);
                    }
                })
            } else {
                setHeight(145);
                setWidth(170);
                log.teams.map((team, key) => {

                    if (team.color === "gray") {
                        transportList.push(airplane_black);
                    } else if (team.color === "pink") {
                        transportList.push(airplane_red);
                    } else if (team.color === "blue") {
                        transportList.push(airplane_blue);

                    }
                })
            }
        }
    }, [log.mode, team, transportList, refreshC]);
    const generateImageElements = (row, transport, teamIndex) => {
        const elements = [];
        if (team.length > 0 && team[0].name) {
            var sum = 0


            for (let i = 0; i < 6; i++) {

                const imgSrc = team[teamIndex].points === sum ? transport : spaceWhite;
                const imgId = `img-${row}-${i}`;
                sum = sum + 5;
                elements.push(
                    <div className="col text-center align-self-center" key={i}>
                        <button className="btn" type="button">
                            <img
                                id={imgId}
                                className="d-lg-flex justify-content-lg-end align-items-lg-center"
                                src={imgSrc}
                                style={{ width: width, height: height }}
                            />
                        </button>
                    </div>
                );
            }
        }
        return elements;
    };

    return (<div className="app">

        <div className="justify-content-center align-items-center align-self-center">
            <div className="row" style={{ marginTop: 24 }}>
                <div className="col-lg-4" />
                {ListOfTeams}
                <div className="col-lg-4" />
            </div>
        </div>
        <div
            className="row justify-content-center align-items-center"
            id="rowUp-1"
            style={{
                paddingBottom: 217,
                paddingTop: 35,
                marginBottom: "-226px",
                marginTop: 40
            }}
        >

            {generateImageElements("1", transportList[0], 0)}
        </div>
        <div
            className="row justify-content-center align-items-center"
            id="rowUp-2"
            style={{
                paddingBottom: 217,
                paddingTop: 79,
                marginBottom: "-226px",
                marginTop: 44
            }}
        >
            {generateImageElements("2", transportList[1], 1)}
        </div>
        {log.teams.length > 2 && (
            <div
                className="row justify-content-center align-items-center"
                id="rowUp-3"
                style={{
                    paddingBottom: 217,
                    paddingTop: 79,
                    marginTop: 44,
                    marginBottom: "-171px"
                }}
            >
                {generateImageElements("3", transportList[2], 2)}
            </div>
        )}
        <div
            className="modal fade"
            id="Pregunta"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-bs-backdrop="static"
        >
            <div className="modal-dialog modal-dialog-centered" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ flex: 1 }}>
                            Pregunta
                        </h1>

                    </div>
                    <div className="modal-body" id="bodyModalTexto">¿Cuál numero es mayor?</div>
                    <div className="modal-footer" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="row" style={{ marginTop: 24 }}>
                            <div class="col-lg-4 col-xxl-1 offset-xxl-0">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    id="Boton1Modal"
                                    onClick={() => { checkMayorOmenor("1") }}
                                >
                                    10
                                </button>
                            </div>
                            <div class="col-lg-4 col-xxl-1 offset-xxl-0">
                                <button type="button" className="btn btn-primary"
                                    id="Boton2Modal" onClick={() => { checkMayorOmenor("2") }}>
                                    15
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {showBackdrop && (
            <div className="modal-custom-backdrop" /> // Fondo oscuro personalizado
        )}
        <div className="justify-content-center align-items-center align-self-center">
            <div className="row" style={{ marginTop: log.teams.length > 2 ? 24 : 300 }}>
                <div className="col-lg-4 col-xxl-1 offset-xxl-0" />
                <div className="col offset-xxl-1">
                    <button className="btn btn-dark" onClick={nextQuestion} type="button">
                        Siguiente pregunta
                    </button>
                </div>
                <div className="col-lg-4 col-xxl-3 offset-xxl-1" />
            </div>
        </div>
    </div>
    )
}
export default Game;