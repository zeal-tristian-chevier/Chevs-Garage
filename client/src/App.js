import "./App.css";
import Homepage from "./views/Homepage";
import Contact from "./views/Contact";
import "./toggleButton.css";
import { Link, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
    const currentYear = new Date().getFullYear();
    const [theme, setTheme] = useState("light");
    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.body.classList.add("bg-dark");
            document.body.classList.remove("bg-light");
        } else {
            setTheme("light");
            document.body.classList.add("bg-light");
            document.body.classList.remove("bg-dark");
        }
    };

    return (
        <>
            <nav
                id="navbar"
                className={`navbar navbar-expand-sm navbar-${theme} bg-${theme}`}
            >
                <img
                    id="logo"
                    src={require("./views/imgs/icontransparent.png")}
                    alt=""
                    style={{ width: "200px", height: "100px" }}
                />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse mt-3 me-5"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <div className="d-flex align-items-center">
                            <label className="switch me-3">
                                <input
                                    type="checkbox"
                                    onClick={handleTheme}
                                    value={theme}
                                />
                                <span className="slider round"></span>
                            </label>
                            <li className="user-select-none nav-link">
                                Dark Mode
                            </li>
                        </div>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage theme={theme} />} />
                <Route path="/contact" element={<Contact theme={theme} />} />
            </Routes>
            {document.body.clientWidth > 768 ? (
                <footer className="text-center text-white fixed-bottom">
                    <div
                        className="text-center p-2 d-flex align-items-center justify-content-around"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    >
                        <p className="text-black">
                            @{currentYear} Copyright: Chev's Garage - All Rights
                            Reserved
                        </p>
                        <img
                            src={require("./views/imgs/BBBblack.png")}
                            alt=""
                            className=""
                        />
                    </div>
                </footer>
            ) : (
                <footer
                    className="text-center text-white"
                    style={{ bottom: "0" }}
                >
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        <p>
                            @{currentYear} Copyright: Chev's Garage - All Rights
                            Reserved
                        </p>
                        <img
                            src={require("./views/imgs/BBBblack.png")}
                            alt=""
                            className=""
                        />
                    </div>
                </footer>
            )}
        </>
    );
}

export default App;
