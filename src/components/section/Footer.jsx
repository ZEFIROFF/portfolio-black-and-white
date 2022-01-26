import React, {useEffect, useRef} from 'react';
import svg from '../../images/svg.svg'
import {gsap, Power3} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
const Footer = () => {
    const revealRef = useRef([])
    revealRef.current = []
    useEffect(() => {
        revealRef.current.forEach((el, index) => {
            gsap.fromTo(el, {opacity: 0, x: -50}, {
                duration: 1.4,
                opacity: 1,
                x: 0,
                ease: Power3.out,
                scrollTrigger: {
                    id: `nac-ul-foot`,
                    trigger: el,
                    start: 'top center+=500',
                    toggleActions: 'play none none none',
                    markers: false
                }
            });
        })}, [])
        const addToRefs = el => {
            if (el && !revealRef.current.includes(el)) {
                revealRef.current.push(el);
            }
        };
        return (
            <div className="d-flex flex-md-column flex-lg-row bg-white py-5 mt-5 justify-content-around align-items-center">
                <nav >
                    <ul ref={addToRefs} id="nac-ul-foot" className="d-flex nac-ul-foot flex-row">
                        <li  className="mx-5 text-decoration-underline nav-foot text-dark"><a
                            href="#dev">ABOUT</a></li>
                        <li className="mx-5 text-decoration-underline nav-foot text-dark"><a
                            href="#works">WORKS</a></li>
                        <li  className="mx-5 text-decoration-underline nav-foot text-dark"><a
                            href="https://telegram.me/D3PII">CONTACT</a></li>
                    </ul>
                </nav>
                <div className="toTop">
                    <div className="img-toTop">
                        <span className="text-toTop"><a href="#top">TOP</a> </span>
                        <img src={svg} alt=""/></div>
                </div>
            </div>
        );
    };

    export default Footer;
