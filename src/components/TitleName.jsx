import React, {useEffect, useRef} from 'react';
import {gsap} from "gsap";
import {Power3} from "gsap/gsap-core";

const TitleName = () => {
    let textDev = useRef()
    let textFrontend = useRef()
    let textBlockchain = useRef()

    useEffect(() => {
        gsap.from(textDev.current, .6, {opacity: 0, x: 50, ease: Power3.out, delay: .4})
        gsap.from(textFrontend.current, .6, {opacity: 0, x: 50, ease: Power3.out, delay: .6})
        gsap.from(textBlockchain.current, .6, {opacity: 0, x: 50, ease: Power3.out, delay: .8})
    },[])

    return (
        <div className="d-flex align-items-center title-name justify-content-between">
            <div className="name">
                <h1 className="name-stroke">ZEFIR</h1>
                <h1 className="name-fill name-off d-flex justify-content-lg-end">OFF</h1>
            </div>
            <div className="spec d-flex flex-column  justify-content-between text-white">
                <h2 ref={textDev} className="d-block me-5 ms-0 my-3">
                    <a href="#dev">DEVELOPER</a>
                </h2>
                <h2 ref={textFrontend} className="d-block ms-0 me-2 my-3 text-center">
                    <a href="#frorntend">FRONT-END</a>
                </h2>
                <h2 ref={textBlockchain} className="d-block ms-5 me-0  my-3">
                    <a href="#blockchain">BLOCKCHAIN</a>

                </h2>
            </div>
        </div>
    );
};

export default TitleName;
