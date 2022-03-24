import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 페이지 이동시 스크롤이 0으로 초기화 되도록 설정함

function Restoration() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'auto'});
    }, [pathname]);

    return null;
}

export default Restoration;