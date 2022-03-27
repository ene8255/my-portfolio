import React, { useRef, useEffect } from 'react';
import './front.scss';

function Front() {
    const canvasRef = useRef(null);

    let scaleValue = 1;
    let rotationValue = 1;
    let x;
    let y;

    function toRadian(deg){
        return deg * Math.PI/180;
    }

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
            context.save();   // transform 효과 주기전의 상태를 저장
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.translate(canvas.width / 2, canvas.height / 2);
            context.scale(scaleValue, scaleValue);
            // context.rotate(toRadian(rotationValue));
            // context.strokeRect(-50, -50, 100, 100);
            context.arc(0, 0, 50, 0, toRadian(360), true);
            context.fill();

            // context.translate(100, 100);
            // context.scale(scaleValue, scaleValue);
            // context.arc(100, 100, 50, 0, toRadian(360), true);
            // context.stroke();
            scaleValue += 0.1;
            rotationValue += 2;
            if(scaleValue < 13) {
                requestAnimationFrame(draw);
            }
    
            context.restore();   // 이전의 상태로 되돌려줌
            writeText({ text: 'Portfolio!', x: canvas.width / 2, y: canvas.height / 2 });
        }

        draw();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let draw = true;

        canvas.addEventListener('mousemove', function(e){
            if(draw) {
                let ctx = canvas.getContext('2d');
                ctx.globalCompositeOperation = 'destination-out';
                ctx.beginPath();
                // ctx.moveTo(e.pageX, e.pageY);
                // ctx.fillStyle = 'transparent';
                ctx.arc(x, y, 40, 0, toRadian(360), true);
                // ctx.clearRect(x, y, 50, 50);
                // ctx.lineTo(x, y);
                ctx.fill();
                x = e.pageX;
                y = e.pageY;
            }
        })
        // return (
        //     draw = false
        // )
    }, [])

    return (
        <div id='front' className='divBox'>
            <canvas ref={canvasRef}></canvas>
            <h2>Inhye's Portfolio</h2>
        </div>
    );
}

export default Front;