import React, {useEffect, useRef} from 'react';
import {gsap, Power3} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
const Developer = () => {
    const revealRef = useRef([])
    revealRef.current = []
    const headerRef = useRef(null);

    useEffect(() => {
        gsap.from(headerRef.current, {
            autoAlpha: 0,
            ease: 'none',
            delay: 1
        });
        revealRef.current.forEach((el, index) => {
            gsap.fromTo(el, {autoAlpha: 0, y: -50}, {
                duration: 2,
                autoAlpha: 1,
                y: 0,
                ease: Power3.out,
                scrollTrigger: {
                    id: `nac-ul-foot-${index + 1}`,
                    trigger: el,
                    start: 'top center+=200',
                    toggleActions: 'play none none reverse',
                    markers: false
                }
            });
        })
    }, [])
    const addToRefs = el => {
        if (el && !revealRef.current.includes(el)) {
            revealRef.current.push(el);
        }
    };
    return (
        <div ref={headerRef} className="about-dev text-white py-5 my-5 ">
            <h1 id="dev" className="dev my-5">_dev:</h1>
            <h2 className="devText text-wrap py-5"><span ref={addToRefs} className="text-dev-1">
                I am a <a href="https://github.com/d3pii">developer</a>, <a
                href="https://github.com/d3pii/election-dapp/tree/master/election-app">crypto</a> enthusiast, <a
                href="https://vk.com/blockchaintspk">mentor</a> based Russia.
            </span>
                <span ref={addToRefs} className="text-dev-2">
                I specialize in interesting <a href="https://altrp.com">start-up</a> projects, always ready to learn
                new
                technology.
            </span>
                <span ref={addToRefs} className="text-dev-3">
                    I write bad code - but professionally.
            </span>
                <span ref={addToRefs} className="text-dev-4">
                    <a href="https://www.upwork.com/freelancers/~019e91ab5325f8a8f1">Freelancing</a> experience available.
            </span>
            </h2>
        </div>
    );
};

export default Developer;
