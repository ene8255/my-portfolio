import React, { useRef, useEffect, useState } from 'react';
import './front.scss';
import styled from 'styled-components';

const Canvas = styled.canvas`
    background-color: ${({theme}) => theme.bgColor}
`;

function Front({ isDarkModeOn }) {
    const [ color0, setColor0 ] = useState('#ebbba7');
    const [ color1, setColor1 ] = useState('#cfc7f8');

    const canvasRef = useRef(null);

    let scaleValue = useRef(1);
    let rotationValue = useRef(1);
    let x = useRef(null);
    let y = useRef(null);

    function toRadian(deg){
        return deg * Math.PI/180;
    }
    
    useEffect(() => {
        if(isDarkModeOn) {
            setColor0('#457fca');
            setColor1('#5691c8');
        } else {
            setColor0('#ebbba7');
            setColor1('#cfc7f8');
        }
    }, [isDarkModeOn]);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext('2d');

        const writeText = (info, style = {}) => {
            const { text, x, y } = info;
            const { fontSize = 40, fontFamily = 'Arial', color = 'black', textAlign = 'left', textBaseline = 'top' } = style;
           
            context.beginPath();
            context.font = fontSize + 'px ' + fontFamily;
            context.textAlign = textAlign;
            context.textBaseline = textBaseline;
            context.fillStyle = color;
            context.fillText(text, x, y);
            context.stroke();
        }

        function draw(){ 
            let grd = context.createLinearGradient(0, 30, 50, 0);
            grd.addColorStop(0, color0);
            grd.addColorStop(1, color1);

            context.save();   // transform 효과 주기전의 상태를 저장
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.translate(canvas.width / 2, canvas.height / 2);
            context.scale(scaleValue.current, scaleValue.current);
            context.fillStyle = grd;
            // context.rotate(toRadian(rotationValue.current));
            // context.strokeRect(-50, -50, 100, 100);
            context.arc(0, 0, 40, 0, toRadian(360), true);
            context.fill();

            // context.translate(100, 100);
            // context.scale(scaleValue.current, scaleValue.current);
            // context.arc(100, 100, 50, 0, toRadian(360), true);
            // context.stroke();
            scaleValue.current += 0.1;
            rotationValue.current += 2;
            if(scaleValue.current < 13) {
                requestAnimationFrame(draw);
            }
    
            context.restore();   // 이전의 상태로 되돌려줌
            // writeText({ text: 'Portfolio!', x: canvas.width / 2, y: canvas.height / 2 });
        }

        draw();
    }, [color0, color1]);

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
    //     let draw = true;

    //     canvas.addEventListener('mousemove', function(e){
    //         if(draw) {
    //             let ctx = canvas.getContext('2d');
    //             // ctx.globalCompositeOperation = 'destination-out';
    //             ctx.beginPath();
    //             // ctx.moveTo(x.current + 10, y.current);
    //             // ctx.strokeStyle = '#F8FFAE';
    //             ctx.moveTo(e.pageX, e.pageY);
    //             // ctx.fillStyle = 'transparent';
    //             // ctx.arc(x.current, y.current, 10, 0, toRadian(360), true);
    //             // ctx.lineTo(x, y);
    //             // ctx.fillStyle = '#F8FFAE';
    //             ctx.fillText('😆', e.pageX, e.pageY);
    //             ctx.stroke();
    //             // x.current = e.pageX;
    //             // y.current = e.pageY;
    //         }
    //     })
    //     // return (
    //     //     draw = false
    //     // )
    // }, [])

    return (
        <div id='front' className='divBox'>
            <Canvas ref={canvasRef}></Canvas>
            {/* <h2>Inhye's Portfolio</h2> */}
        </div>
    );
}

export default Front;