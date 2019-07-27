import React from 'react';
import { useState } from 'react';

const SmurfForm = () => {

    const [smurfName, setSmurfName] = useState("");
    const [smurfAge, setSmurfAge] = useState("");
    const [smurfHeight, setSmurfHeight] = useState("");

    return (
        <div>
            <form >
            {/* onSubmit={this.handleInputChange} */}
                <input
                    onChange={(event)=>{
                        console.log(event)}
                    }
                    placeholder="name"
                    value={smurfName}
                    name="name"
                />
                <input
                    onChange={(event)=>{
                        console.log(event)}
                    }
                    placeholder="age"
                    value={smurfAge}
                    name="age"
                />
                <input
                    onChange={(event)=>{
                        console.log(event)}
                    }
                    placeholder="height"
                    value={smurfHeight}
                    name="height"
                />
                <button type="submit" >
                {/* onClick={()=> props.buyItem(props.feature)} */}
                    Add to the village
                </button>
            </form>
        </div>
    )
}

export default SmurfForm
