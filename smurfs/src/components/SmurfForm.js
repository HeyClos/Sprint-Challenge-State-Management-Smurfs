import React from 'react';
import { useState } from 'react';

const SmurfForm = () => {

    const [smurfName, setSmurfName] = useState(0);
    const [smurfAge, setSmurfAge] = useState(0);
    const [smurfHeight, setSmurfHeight] = useState(0);

    return (
        <div>
            <form onSubmit={this.handleInputChange}>
                <input
                    onChange={(event)=>{
                        console.log(event)}
                    }
                    placeholder="name"
                    value={smurfName}
                    name="name"
                />
                <input
                    onChange={this.changeHandler}
                    placeholder="age"
                    value={smurfAge}
                    name="age"
                />
                <input
                    onChange={this.changeHandler}
                    placeholder="height"
                    value={smurfHeight}
                    name="height"
                />
                <button type="submit">Add to the village</button>
            </form>
        </div>
    )
}

export default SmurfForm
