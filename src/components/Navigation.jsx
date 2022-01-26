import React, {useEffect, useRef} from 'react';
import github from '../images/github (1).png';
import instagram from '../images/instagram.png';
import tg from '../images/telegram (1).png';
import upwork from '../images/icons8-upwork-500.png'
import {gsap} from "gsap";
import {Power3} from "gsap/gsap-core";

const Navigation = () => {
    let iconGithub = useRef()
    let iconInsta = useRef()
    let iconTG = useRef()
    let iconUpwork = useRef()

    useEffect(() => {
        gsap.from(iconGithub.current, .6, {opacity: 0, y: -20, ease: Power3.out, delay: .4})
        gsap.from(iconInsta.current, .6, {opacity: 0, y: -20, ease: Power3.out, delay: .6})
        gsap.from(iconTG.current, .6, {opacity: 0, y: -20, ease: Power3.out, delay: .8})
        gsap.from(iconUpwork.current, .6, {opacity: 0, y: -20, ease: Power3.out, delay: 1})
    },[])
    return (
            <div className="d-flex flex-column nav-link ">
                <span ref={iconGithub} className="py-2"><a href="https://github.com/d3pii"><img src={github} alt="GitHub"/></a></span>
                <span ref={iconInsta} className="py-2"><a href="https://www.instagram.com/d3piis/"><img src={instagram} alt="instagram"/></a></span>
                <span ref={iconTG} className="py-2"><a href="https://telegram.me/D3PII"><img src={tg} alt="TG icon"/></a></span>
                <span ref={iconUpwork} className="py-2"><a href="https://www.upwork.com/freelancers/~019e91ab5325f8a8f1"><img src={upwork} alt="upwork icon"/></a></span>

            </div>
    );
};

export default Navigation;
