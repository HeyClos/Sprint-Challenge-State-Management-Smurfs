import React from 'react';
import Smurf from './Smurf';

const SmurfList = (props) => {
    console.log(props.smurfs)
    return (
        <div>
            <ul>
                {props.smurfs.map(smurf => {
                    return (
                        <Smurf
                            name={smurf.name}
                            id={smurf.id}
                            age={smurf.age}
                            height={smurf.height}
                            key={smurf.id}
                        />
                    );
                })}
            </ul>
        </div>
    )
}

export default SmurfList;