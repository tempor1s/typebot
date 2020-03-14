import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
// @ts-ignore
import CELLS from 'vanta/dist/vanta.cells.min';
// @ts-ignore
import Tilt from 'react-tilt'

const Container = styled.div`
    height: 100vh;
`;

const VerifyContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const VerifyOutline = styled.div`
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 3px 0px #cfcfcf;
    background-color: white;
`;

const VerifyHeader = styled.h1`
    font-size: 27px;
    margin-bottom: 3px;
    color: #3f3f3f;
`;

const VerifySubHeader = styled.p`
    font-size: 19px;
    letter-spacing: .4px;
    color: #8f8f8f;
`

const VerifyLink = styled.a`
    text-decoration: none
`;
        

const VerifyBtn = styled.button`
    color: white;
    cursor: pointer;
    margin-top: 30px;
    font-size: 14px;
    text-transform: uppercase;
    padding: 5px 15px;
    border-radius: 8px;
    letter-spacing: 1px;
    font-weight: 500;
    background-color: #fea100;

    &:hover{
        padding: 5px 24px;
        background-color: #ffb73a;
    }
`;


const Home: React.FC = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                CELLS({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    size: 1.00
                })
            );
        }
        return () => {
            // @ts-ignore
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <Container ref={myRef}>
            <VerifyContainer>
                <Tilt className="Tilt" options={{ max : 16, scale: 1 }} >
                <VerifyOutline>
                    <VerifyHeader>
                        Make School COVID-19 Hideout
                    </VerifyHeader>
                    <VerifySubHeader>
                        Join fellow students and staff to 
                        <span style={{textDecoration: 'line-through'}}> fight </span>
                        hide from the virus.
                    </VerifySubHeader>
                    <VerifyLink href="">
                        <VerifyBtn >
                            Get quarantined now
                        </VerifyBtn>
                    </VerifyLink>
                </VerifyOutline>
            </Tilt>
            </VerifyContainer>
        </Container>
    )
}

export default Home;
