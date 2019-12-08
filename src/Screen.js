import React from "react";
import {Button, FormLabel, FormControl} from "react-bootstrap";
import "./App.css";
import {Switch,Route,BrowserRouter,NavLink, Link} from 'react-router-dom';


function Screen() {
        return(
            <div id="body">
                <section className="form">
                    <div id="campos">
                        <FormLabel className="texto">IP</FormLabel>
                        <FormControl type="number" id="place" placeholder="Seu IP" />
                        <FormLabel id="texto">Domínio</FormLabel>
                        <FormControl type="text" id="place" placeholder="Seu domínio" />
                        <div id="all">
                        <button type="submit" class="btn btn-primary" style={{marginTop: "10px", marginLeft: "5%",}}>Salvar</button>
                        <NavLink to="/Dominios">
                        <button type="submit" class="btn btn-primary" style={{marginTop: "10px", marginLeft:"5%", display: "flex"}}>Lista de domínios</button>
                        </NavLink>
                        <NavLink to="/subdominios">
                        <button type="submit" class="btn btn-primary" style={{marginTop: "10px", marginLeft: "5%"}}>Lista de subdomínios</button>
                        </NavLink>
                        </div>
                    </div>
                    { /*<Button type="submit" id="bott"></Button> */ }
                </section>
            </div>
        )

}

export default Screen;