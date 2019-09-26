import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Name = styled.h1`
    font-size: 30px;
`;


export default function Mainer () {
    return (
        <Container>
            <Name>Aayush Pal</Name>
            <h4>Brainstormer, Engineer</h4>
        </Container>
    )
}

