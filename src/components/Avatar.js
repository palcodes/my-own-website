import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    border-radius: 50%;
    block-size: 200px;
    padding: 25px;
    /* position: absolute; */
`;

export default function Avatar() { 
    return (
        <div>
            {/* <img src={require('./myprofile.jpg')} alt=""/> */}
            <Image src={require('./myprofile.jpg')} alt=""/>
        </div>
    );
}