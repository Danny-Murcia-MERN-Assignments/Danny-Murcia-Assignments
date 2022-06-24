import React, {useState} from 'react';

const Display = (props) => {



const {boxList, setBoxList} = props;
const [color, setColor] = useState("");


return (
    <div style = {{ width: "75%", margin: "auto" }}>

        <h1>Displaying Boxes</h1>

        <div style = {{ display: "flex", justifyContent: "space-around" }}>
{
    boxList.map((color, index) => {
        return (
            <div key = {index}
            style = {{
                backgroundColor: color,
                border: "3px double black",
                width: "100px",
                height: "100px"
            }}
            >
                <p>{color.color}</p>
            </div>
        )
    })
}
</div>
    </div>
)
}
export default Display; 