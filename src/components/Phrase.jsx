import React from 'react';


const Phrase = ({fortune}) => {
    return (
        // <div className='cookie-card'>
        //     <h1>{fortune.phrase}</h1>
        //     <p>-{fortune.author}-</p>
        // </div>
        <div class="card">
        <h3 class="card__title">{fortune.phrase}
        </h3>
        <p class="card__content">-{fortune.author}-</p>
        
        
    </div>
    );
};

export default Phrase;