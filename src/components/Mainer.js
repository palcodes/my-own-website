import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Name = styled.h1`
    font-size: 5rem;
`;


export default function Mainer () {
    return (
        <Container>
            <Name>Aayush Pal</Name>
            <h3>Brainstormer, Engineer</h3>
        </Container>
    )
}

