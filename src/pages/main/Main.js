
import Recommend from "./Recommend";
import Art from "./Art";
import Nobel from "./Nobel";
import MainVisualSlide from "./MainVisualSlide";
import Popular from "./Popular";
import Children from "./Children";
import React from "react";
import BootstrapNavbar from "../BootstrapNavbar";

export default function Main() {

    return (
        <div className='w-full main'>
            <MainVisualSlide/>
            <Recommend/>
            <Nobel/>
            <Art/>
            <Popular/>
            <Children/>
        </div>
    );
};