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
    width: 400px;
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

const PrivacyPage = () => (
    <Container>
        <TextArea>
            This site is public, anything posted can be viewed by anyone else who visits the site. Your login information is only used to get your initial profile picture and set your user name. It also allows you to add posts and comment.
        </TextArea>
    </Container>
);
export default PrivacyPage;