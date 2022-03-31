import React from 'react';
import styled from 'styled-components';

const STitle = styled.div`
    &:after {
        background-color: ${({ theme }) => theme.bgColor};
        border: ${({ theme }) => theme.border};
        mix-blend-mode: ${({ theme }) => theme.mixBlend};
    }
`;

function SectionTitle({ title }) {
    return (
        <STitle className='sectionTitle'>
            <h2>{title}</h2>
        </STitle>
    );
}

export default SectionTitle;