import React, { Component } from 'react';
import ScratchCard1 from './help';

import './ScratchCard.scss'

// export default function ScratchCard() {
//     const canvasRef = React.useRef(null)

//     useEffect(() => {
//         console.log('xgf1', document.getElementById('.canvas'));
//         console.log('xgf2', canvasRef.current);
//         return () => {
//             console.log('cleanUp');
//         }
//     }, [])
//     // new ScratchCard1({
//     //     canvas: canvasRef.current,
//     //     coverImg: 'scratch-2x.jpg',
//     //     pixelRatio: 2,
//     //     doneCallback: function () {
//     //         console.log('done');
//     //     }
//     // })
//     return (
//         <div className="ScratchCard">
//             <canvas ref={canvasRef} id="canvas" width="750" height="280"></canvas>
//         </div>
//     )
// }

export default class ScratchCard extends Component {
    componentDidMount() {
        setTimeout(() => {

        }, 1000);
        console.log('xgf', document.getElementById('canvas'));
        console.log('xgf1', document.getElementById('container'));
        new ScratchCard1({
            canvas: document.getElementById('canvas'),
            // coverImg: '../../../assets/scratch-2x.jpg',
            pixelRatio: 2,
            doneCallback: function () {
                console.log('done');
            }
        })
    }
    render() {
        return (
            <div className="ScratchCard">
                <canvas id="canvas" width="750" height="280"></canvas>
                <div id="container" style={{ height: '50px', height: '50px', backgroundColor: 'blue' }}></div>
                <img src="../../../assets/scratch-2x.jpg" />
            </div>
        )
    }
}