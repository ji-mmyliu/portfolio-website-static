import * as React from "react";
import { BrowserRouter, Routes, Route, useNavigate, NavigateFunction, Link } from "react-router-dom";
import { About } from "../about";
import { Projects } from "../projects";
import { Achievements } from "../achievements";
import { NotFound } from "../notfound";
import { Resume } from "../resume";

export const _App = (): JSX.Element => {
    return (
        <div className="page">
            <div className="navbar">
                <header className="site-header">
                    <nav className="navbar navbar-expand-md navbar-dark bg-success fixed-top">
                        <div className="container">
                            <Link className="navbar-brand mr-4" to="/">Jimmy Liu's Portfolio</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarToggle">
                                <div className="navbar-nav mr-auto">
                                    <Link className="nav-item nav-link" to="/about-me">About Me</Link>
                                    <Link className="nav-item nav-link" to="/projects">Projects</Link>
                                    <Link className="nav-item nav-link" to="/achievements">Achievements</Link>
                                    <Link className="nav-item nav-link" to="/resume">Resume</Link>

                                    <div className="btn-group">
                                        <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ICS Archives</button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="https://ics.portfolio.jimmyliu.dev" target="_blank">ICS4U Portfolio</a>
                                            <a className="dropdown-item" href="https://ics.tutorials.jimmyliu.dev" target="_blank">ICS4U Java Tutorials</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about-me" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <_App />
        </BrowserRouter>
    );
}