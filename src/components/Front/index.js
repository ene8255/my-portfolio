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

    // degree를 radian으로 바꿔주는 함수
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

        function draw(){ 
            // linear 그라디언트 정의
            let grd = context.createLinearGradient(0, 30, 50, 0);
            grd.addColorStop(0, color0);
            grd.addColorStop(1, color1);

            context.save();   // transform 효과 주기전의 상태를 저장
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.translate(canvas.width / 2, canvas.height / 2);
            context.scale(scaleValue.current, scaleValue.current);
            context.fillStyle = grd;
            context.arc(0, 0, 40, 0, toRadian(360), true);
            context.fill();

            scaleValue.current += 0.1;
            if(scaleValue.current < 13) {
                requestAnimationFrame(draw);
            }
    
            context.restore();   // 이전의 상태로 되돌려줌
        }

        draw();
    }, [color0, color1]);

    return (
        <div id='front' className='divBox'>
            <Canvas ref={canvasRef}></Canvas>
        </div>
    );
}

export default Front;