import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    border-radius: 50%;
    block-size: 250px;
    padding: 25px;
`;

export default function Avatar() { 
    return (
        <div>
            {/* <img src={require('./myprofile.jpg')} alt=""/> */}
            <Image src={require('./myprofile.jpg')} alt=""/>
        </div>
    );
}