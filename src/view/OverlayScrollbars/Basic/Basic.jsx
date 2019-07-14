import React from 'react';

export default function Basic() {
    return (
        <div>
            {
                Array(60).fill(0).map((v,i)=>(
                    <div key={i}>v</div>
                ))
            }
        </div>
    );
}


