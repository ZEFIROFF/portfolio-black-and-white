import React, {useEffect, useRef} from 'react';
import NFT from "../images/bear.png";
import copp from '../images/image_original.jpg'
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const WorksList = () => {
    const revealRef = useRef([])
    const headerRef = useRef(null);

    revealRef.current = []
    useEffect(() => {
        gsap.from(headerRef.current, {
            autoAlpha: 0,
            ease: 'none',
            delay: 1
        });
        revealRef.current.forEach((el, index)=>{
            gsap.fromTo(el, {autoAlpha: 0}, {
                duration: 1,
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger:{
                    id: `own-work-${index+1}`,
                    trigger: el,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse',
                    markers: false
                }
            });

        });
    }, []);
    const addToRefs = el => {
        if (el && !revealRef.current.includes(el)) {
            revealRef.current.push(el);
        }
    };
    return (
        <div ref={headerRef} className="work-list ">
            <div ref={addToRefs} className="own-work-1 flex-md-column flex-lg-row d-flex align-items-center">
                <div className="own-work-title my-5">
                    <h1 id="frorntend">Redesign map</h1>
                    <p className="text-secondary my-3 py-3 w-75">task: redesign old website for education and <br/>
                        training of students and specialists <br/>
                        The modern design. Actual colors of brandbook were used. <br/> Work was done according to  <br/>Standards of state websites
                    </p>
                    <p className="text-white my-3 py-5">link: <a href="https://www.behance.net/gallery/135940683/copp-redisign?share=1">full image</a></p>
                </div>
                <div className="wrapper my-5">
                    <img src={copp} alt="copp "/>
                </div>
            </div>
            <div ref={addToRefs} className="own-work-2 flex-md-column flex-lg-row  d-flex my-5">
                <div className="own-work-title my-5">
                    <h1 id="blockchain">NFT Game</h1>
                    <p className="text-secondary my-3 py-3 w-75">task: NFT game on the polygon blockchain network and issue 5000 NFT cards for the game</p>
                    <p className="text-white my-2 pt-4">link: <a href="https://www.cryptoinvestor.win">NFT app</a></p>
                    <p className="text-white my-2 ">link: <a href="https://opensea.io/FiGames">OpenSea Client</a></p>
                </div>

                <div className="wrapper my-5">
                    <img src={NFT} id="bearNft" alt="NFT BEAR"/>
                </div>
            </div>
        </div>
    );
};

export default WorksList;
