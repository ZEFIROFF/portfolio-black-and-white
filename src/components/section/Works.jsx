import React from 'react';
import WorksList from "../WorksList";

const Works = () => {

    return (
        <div className="Works text-white d-flex flex-column my-5" >
            <div className="title-works my-5">
                <h1 id="works" className="text-center my-3 py-3">work_S:</h1>
                <p className="text-secondary text-end my-3">these are my best projects <br/>
                    during development. <br/> Works from all <br/> areas of the sphere <br/> where I worked or work today <br/> are demonstrated<br/> </p>
            </div>
            <WorksList/>
        </div>
    );
};

export default Works;
