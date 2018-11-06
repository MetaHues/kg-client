import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const TextArea = styled.p`
    width: 700px;
    margin-bottom: 1rem;
`;

const Anchor = styled.a`
    color: tomato;
    :link {
        color: tomato;
    }
    :active {
        color: tomato;
    }
    :visited {
        color: tomato;
    }
`;

const AboutPage = () => (
    <Container>
        <TextArea>
            This site is for learning purpases only, it is meant to get a better understanding of Front-End (React / Redux) as well as Back-end (Express / Mongodb). This is in no way related to Instagram/Facebook but was alot of fun to build.
        </TextArea>
        <TextArea>
            You can find the source code at <Anchor href="https://github.com/MetaHues/kg-client" alt="client source code">https://github.com/MetaHues/kg-client</Anchor> and <Anchor href="https://github.com/MetaHues/kg-api" alt="backend source code">https://github.com/MetaHues/kg-api</Anchor>.
        </TextArea>
    </Container>
);
export default AboutPage;