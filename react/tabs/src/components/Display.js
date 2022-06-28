import React from 'react';

const Display = (props) => {

    const {tabContent} = props;

    return (

        <div style={{height: "200px", width: "400px", margin:"auto", border:"2px solid black", borderRadius:"60px", textAlign:"center", paddingTop:"30px", paddingLeft: "30px", fontSize:"30px"}}>
            {tabContent}
        </div>
    )

}

export default Display;