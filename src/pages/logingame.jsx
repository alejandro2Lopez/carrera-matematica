import React, { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";
import { message } from "../components/Message";

import "../assets/css/Masonry-gallery-cards-responsive.css";
import "../assets/css/OcOrato---Login-form-styles.css";
import "../assets/css/OcOrato---Login-form.css";
import "../assets/css/Overlay-Login-Form.css";
import "../assets/css/styles.css";
import car_red from "../assets/img/car_red.png";
import car_green from "../assets/img/car_green.png";
import car_yellow from "../assets/img/car_yellow.png";
import car_mode from "../assets/img/car_mode.png";
import airplane_mode from "../assets/img/airplane_mode.png";
import airplane_blue from "../assets/img/airplane_blue.png";
import airplane_green from "../assets/img/airplane_green.png";
import airplane_red from "../assets/img/airplane_red.png";
import pistaDesert from "../assets/img/PistaDesert.png";
import PistaNight from "../assets/img/PistaNight.png";
import pistaSnow from "../assets/img/PistaSnow.png";
import topicMayorMenor from "../assets/img/mayorMenor.png";
import level1 from "../assets/img/Level1.png";
import level2 from "../assets/img/Level2.png";
import level3 from "../assets/img/Level3.png";
const LoginGame = () => {

    const [mode, setMode] = useState("");
    const [modePista, setModePista] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [arrayteam] = useState([]);
    const [showRed, setShowRed] = useState(true);
    const [showYellow, setShowYellow] = useState(true);
    const [showGreen, setShowGreen] = useState(true);
    const [team] = useState({});
    const [modeTopic, setModeTopic] = useState("");
    const [modeLevel, setModeLevel] = useState("");
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    /*   const [team] = useState([]);
   /   const addTeam = () => {
           const input = document.getElementById("login")
           if (input.value.length === 0) {
               message(`Tienes que agregar un nombre al equipo`, 'error', 3000);
           } else {
               team.push({ name: input.value, points: 0 })
               message(`El equipo ${input.value} se ha agregado de manera correcta.`, 'success', 3000);
               input.value = "";
           }
   
       }
     
       const goToTheMathLab = () => {
           window.location.href = 'https://matlab-juegosu.onrender.com/';
           dispatch({ type: authTypes.logout })
   
       }*/
    useEffect(() => {
        if (refresh) {

            setRefresh(false);

        }
    }, [refresh])

    const handleClickModeLevel = (modelevel) => {
        setRefresh(true);
        if (arrayteam.length > 0) {
            navigate('/Game')
            dispatch({ type: authTypes.login, teams: arrayteam, pista: modePista, topic: modeTopic, level: modelevel, mode: mode })
            var backdrops = document.querySelectorAll('.modal-backdrop');
            backdrops.forEach(function (backdrop) {
                backdrop.parentNode.removeChild(backdrop);
            });
        } else {
            message('Debes agregar al menos un jugador.', 'question', 1500);
        }

    }

    const handleClickModePista = (mode) => {
        setRefresh(true);
        if (mode === "pista1") {
            setModePista("pista1");
        } else if (mode === "pista2") {
            setModePista("pista2");
        } else {
            setModePista("pista3");
        }
    }
    const handleClick = () => {
        if (arrayteam.length <= 1) {
            message("Tiene que agregar almenos 2 equipos para jugar", "error", 3000)
        }
    };
    const handleClickModeTopic = (mode) => {
        setRefresh(true);
        if (mode === "mayormenor") {
            setModeTopic("mayormenor");
        } else if (mode === "1") {
            setModeTopic("pista2");
        } else {
            setModeTopic("pista3");
        }
    }
    const handleClickModeGame = (mode) => {
        setRefresh(true);
        if (mode === "car") {
            setMode("car")
        } else {
            setMode("airplane")
        }
    }
    const handleClickCarUse = (colortransport) => {
        team.color = colortransport;
        setRefresh(true);
        if (colortransport === "red" || colortransport === "pink") {
            setShowRed(false);
        } else if (colortransport === "green" || colortransport === "gray") {
            setShowGreen(false);
        } else {
            setShowYellow(false)
        }

    }
    const handleClickNameTeam = () => {
        const input = document.getElementById("recipient-name")
        if (input.value.length === 0) {
            message(`Tienes que agregar un nombre al equipo`, 'error', 3000);
        } else {
            team.name = input.value;
            input.value = "";
            arrayteam.push({ name: team.name, color: team.color, points: 0 });
            message(`Se ha agregado el equipo correctamente`, 'success', 3000);
            document.getElementById('teamName').style.display = 'none';
            var backdrops = document.querySelectorAll('.modal-backdrop');
            backdrops.forEach(function (backdrop) {
                backdrop.parentNode.removeChild(backdrop);
            });
        }
    }
    const handleAddTeam = () => {
        if (arrayteam.length > 2) {
            message(`Se ha agreado el límite de equipos`, 'error', 3000);
        }
    }
    return (
        <>
            <div
                className="row justify-content-center align-items-center"
                id="rowUp"
                style={{ paddingBottom: 150 }}
            >
                <div className="col" />
                <div className="col" />
                <div className="col" />
            </div>
            <div className="row justify-content-center align-items-center card-login ">
                <div className="col" />
                <div className="col d-xxl-flex justify-content-xxl-center align-items-xxl-center justify-content-center align-items-center">
                    <div className="divInit">
                        <form
                            id="form"
                            className="form-login"
                            style={{
                                fontFamily: "Quicksand, sans-serif",
                                backgroundColor: "rgba(44,40,52,0.73)",
                                width: 800,
                                padding: 40,
                                maxWidth: 800,
                                borderRadius: 12,
                                textAlign: "center"
                            }}
                        >
                            <h1 id="head" style={{ color: "rgb(193,166,83)" }}>
                                Carreras Matemáticas
                            </h1>
                            <div
                                className="row"
                                style={{ position: "relative", display: "block", paddingTop: 20 }}
                            >
                                <div className="col" style={{ paddingLeft: 0 }}>
                                    <button
                                        onClick={handleClick}
                                        className="btn btn-primary .btn-menu"
                                        data-bs-toggle={arrayteam.length >= 1 ? "modal" : undefined}
                                        data-bs-target={arrayteam.length >= 1 ? "#gameModePista" : undefined} type="button"
                                        style={{
                                            width: 200,
                                            background: "rgb(89,206,206)",
                                            borderRadius: 12
                                        }}
                                    >
                                        Jugar
                                    </button>
                                    <button
                                        onClick={handleAddTeam}
                                        data-bs-toggle="modal" data-bs-target={mode.length < 1 ? "#gameMode" : "#exampleModal"}
                                        disabled={arrayteam.length >= 2}
                                        className="btn btn-secondary .btn-menu"
                                        type="button"
                                        style={{
                                            width: 200,
                                            margin: 20,
                                            background: "rgb(212,118,49)",
                                            borderRadius: 12
                                        }}
                                    >
                                        Agregar equipo
                                    </button>
                                </div>
                                <div
                                    className="col text-center"
                                    style={{ padding: 0, paddingTop: 3 }}
                                >
                                    <button
                                        className="btn btn-primary .btn-menu"
                                        type="button"
                                        style={{
                                            width: 200,
                                            background: "rgb(55,72,226)",
                                            borderStyle: "none",
                                            borderRadius: 12
                                        }}
                                    >
                                        Instrucciones
                                    </button>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="btn-toolbar">
                                    <div className="btn-group" role="group" />
                                    <div className="btn-group" role="group" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col" />
            </div>
            <div className="modal fade" id="exampleModal" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">

                        <div className="modal-header d-block">
                            <div className="text-center" style={{ textAlign: "center !important" }}>
                                <h2 className="modal-title text-center" id="titleVerification">
                                    Escoje un medio de transporte
                                </h2>
                            </div>
                        </div>

                        <div className="modal-body justify-content-center align-items-center">
                            <div className="row justify-content-center align-items-center">
                                <div className="col d-none d-sm-block" />

                                {showRed && (<div className="col justify-content-center align-items-center">
                                    <div className="col-sm-6 col-lg-4 mb-4 " onClick={() => handleClickCarUse(mode === "car" ? "red" : "pink")} data-bs-target="#teamName" data-bs-toggle="modal">
                                        <div className="card cardImg" style={{ width: 250 }}>
                                            <img
                                                className="card-img-top p-3 cardImg"
                                                src={mode === "car" ? car_red : airplane_red}
                                                alt=""
                                                style={{ borderRadius: 24, objectFit: "cover", width: 250 }}
                                                width={250}
                                                height={196}
                                            />
                                        </div>
                                    </div>
                                </div>

                                )}
                                {showGreen && (<div className="col justify-content-center align-items-center" >

                                    <div onClick={() => handleClickCarUse(mode === "car" ? "green" : "gray")} data-bs-target="#teamName" data-bs-toggle="modal" className="col-sm-6 col-lg-4 mb-4">
                                        <div className="card cardImg" style={{ width: 250 }}>
                                            <img
                                                className="card-img-top p-3 cardImg"
                                                src={mode === "car" ? car_green : airplane_green}
                                                alt=""
                                                style={{ borderRadius: 24, objectFit: "cover", width: 250 }}
                                                width={250}
                                                height={196}
                                            />
                                        </div>
                                    </div>
                                </div>
                                )}

                                {showYellow && (<div className="col justify-content-center align-items-center" >
                                    <div className="col-sm-6 col-lg-4 mb-4" onClick={() => handleClickCarUse(mode === "car" ? "yellow" : "blue")} data-bs-target="#teamName" data-bs-toggle="modal" style={{ textAlign: "right" }}>
                                        <div className="card cardImg" style={{ width: 250 }}>
                                            <img
                                                className="card-img-top p-3 cardImg"
                                                src={mode === "car" ? car_yellow : airplane_blue}
                                                alt=""
                                                style={{ borderRadius: 24, objectFit: "cover", width: 250 }}
                                                width={250}
                                                height={196}
                                            />
                                        </div>
                                    </div>
                                </div>
                                )}
                                <div className="col" />
                            </div>

                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="gameModePista" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">

                        <div className="modal-header d-block">
                            <div className="text-center" style={{ textAlign: "center !important" }}>
                                <h2 className="modal-title text-center" id="titleVerification">
                                    Escoje la pista de juego
                                </h2>
                            </div>
                        </div>

                        <div className="modal-body justify-content-center align-items-center">
                            <div className="row justify-content-center align-items-center">
                                <div className="col d-none d-sm-block" />

                                <div className="col justify-content-center align-items-center">
                                    <div className="col-sm-6 col-lg-4 mb-4 " onClick={() => handleClickModePista("pista1")} data-bs-target="#gameTopic" data-bs-toggle="modal">
                                        <div className="card cardImg" style={{ width: 250 }}>
                                            <img
                                                className="card-img-top p-3 cardImg"
                                                src={pistaDesert}
                                                alt=""
                                                style={{ borderRadius: 24, objectFit: "cover", width: 250 }}
                                                width={250}
                                                height={196}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="col justify-content-center align-items-center" >

                                    <div onClick={() => handleClickModePista("pista2")} data-bs-target="#gameTopic" data-bs-toggle="modal" className="col-sm-6 col-lg-4 mb-4">
                                        <div className="card cardImg" style={{ width: 250 }}>
                                            <img
                                                className="card-img-top p-3 cardImg"
                                                src={PistaNight}
                                                alt=""
                                                style={{ borderRadius: 24, objectFit: "cover", width: 250 }}
                                                width={250}
                                                height={196}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="col justify-content-center align-items-center" >
                                    <div className="col-sm-6 col-lg-4 mb-4" onClick={() => handleClickModePista("pista3")} data-bs-target="#gameTopic" data-bs-toggle="modal" style={{ textAlign: "right" }}>
                                        <div className="card cardImg" style={{ width: 250 }}>
                                            <img
                                                className="card-img-top p-3 cardImg"
                                                src={pistaSnow}
                                                alt=""
                                                style={{ borderRadius: 24, objectFit: "cover", width: 250 }}
                                                width={250}
                                                height={196}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col" />
                            </div>

                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="gameTopic" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">

                        <div className="modal-header d-block">
                            <div className="text-center" style={{ textAlign: "center !important" }}>
                                <h2 className="modal-title text-center" id="titleVerification">
                                    Escoje el tema a evaluar
                                </h2>
                            </div>
                        </div>

                        <div className="modal-body justify-content-center align-items-center">
                            <div className="row justify-content-center align-items-center">
                                <div className="col d-none d-sm-block" />

                                <div className="col justify-content-center align-items-center">
                                    <div className="col-sm-6 col-lg-4 mb-4 " onClick={() => handleClickModeTopic("mayormenor")} data-bs-target="#gameModeLevel" data-bs-toggle="modal">
                                        <div className="card cardImg" style={{ width: 250 }}>
                                            <img
                                                className="card-img-top p-3 cardImg"
                                                src={topicMayorMenor}
                                                alt=""
                                                style={{ borderRadius: 24, objectFit: "cover", width: 250 }}
                                                width={250}
                                                height={196}
                                            />
                                            <p>Comparar números</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col" />
                            </div>

                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="gameModeLevel" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">

                        <div className="modal-header d-block">
                            <div className="text-center" style={{ textAlign: "center !important" }}>
                                <h2 className="modal-title text-center" id="titleVerification">
                                    Escoje el nivel de juego
                                </h2>
                            </div>
                        </div>

                        <div className="modal-body justify-content-center align-items-center">
                            <div className="row justify-content-center align-items-center">
                                <div className="col d-none d-sm-block" />

                                <div className="col justify-content-center align-items-center">
                                    <div className="col-sm-6 col-lg-4 mb-4 " onClick={() => handleClickModeLevel("level1")}>
                                        <div className="card cardImg" style={{ width: 250 }}>
                                            <img
                                                className="card-img-top p-3 cardImg"
                                                src={level1}
                                                alt=""
                                                style={{ borderRadius: 24, objectFit: "cover", width: 250 }}
                                                width={250}
                                                height={196}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="col justify-content-center align-items-center" >

                                    <div onClick={() => handleClickModeLevel("level2")} className="col-sm-6 col-lg-4 mb-4">
                                        <div className="card cardImg" style={{ width: 250 }}>
                                            <img
                                                className="card-img-top p-3 cardImg"
                                                src={level2}
                                                alt=""
                                                style={{ borderRadius: 24, objectFit: "cover", width: 250 }}
                                                width={250}
                                                height={196}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="col justify-content-center align-items-center" >
                                    <div className="col-sm-6 col-lg-4 mb-4" onClick={() => handleClickModeLevel("level3")} style={{ textAlign: "right" }}>
                                        <div className="card cardImg" style={{ width: 250 }}>
                                            <img
                                                className="card-img-top p-3 cardImg"
                                                src={level3}
                                                alt=""
                                                style={{ borderRadius: 24, objectFit: "cover", width: 250 }}
                                                width={250}
                                                height={196}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col" />
                            </div>

                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade " id="gameMode" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">

                        <div className="modal-header d-block">
                            <div className="text-center" style={{ textAlign: "center !important" }}>
                                <h2 className="modal-title text-center" id="titleVerification">
                                    Escoje un modo de carrera
                                </h2>
                            </div>
                        </div>

                        <div className="modal-body justify-content-center align-items-center">
                            <div className="row justify-content-center align-items-center">
                                <div className="col d-none d-sm-block" />

                                <div className="col justify-content-center align-items-center">

                                    <div onClick={() => handleClickModeGame('car')} data-bs-target="#exampleModal" data-bs-toggle="modal" className="col-sm-6 col-lg-4 mb-4">
                                        <div className="card cardImg" style={{ width: 250 }}>
                                            <img
                                                className="card-img-top p-3 cardImg"
                                                src={car_mode}
                                                alt=""
                                                style={{ borderRadius: 24, objectFit: "cover", width: 250 }}
                                                width={250}
                                                height={196}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="col justify-content-center align-items-center">
                                    <div onClick={() => handleClickModeGame('airplane')} data-bs-toggle="modal" data-bs-target="#exampleModal" className="col-sm-6 col-lg-4 mb-4" style={{ textAlign: "right" }}>
                                        <div className="card cardImg" style={{ width: 250 }}>
                                            <img
                                                className="card-img-top p-3 cardImg"
                                                src={airplane_mode}
                                                alt=""
                                                style={{ borderRadius: 24, objectFit: "cover", width: 250 }}
                                                width={250}
                                                height={196}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col" />
                            </div>

                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade " id="teamName" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">

                        <div className="modal-header d-block">
                            <div className="text-center" style={{ textAlign: "center !important" }}>
                                <h2 className="modal-title text-center" id="titleVerification">
                                    ¿Cómo se va a llamar tu equipo?
                                </h2>
                            </div>
                        </div>

                        <div className="modal-body justify-content-center align-items-center">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">
                                        Nombre:
                                    </label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-primary" onClick={handleClickNameTeam} >Agregar equipo</button>
                        </div>
                    </div>
                </div >
            </div >

        </>

    );

};

export default LoginGame;