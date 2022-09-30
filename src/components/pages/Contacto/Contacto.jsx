import React from "react";
import { Container, label, } from "react-router-dom"
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import "./Contacto.css"
const Contacto = () => {
    return (
        <Container id="contacto">
            <form>
                <label>
                    Name: "carlos"
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </Container>
    );
};

export default Contacto;