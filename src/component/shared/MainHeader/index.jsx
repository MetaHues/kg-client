import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HeaderNav from './HeaderNav'

// style
const Spacer = styled.div`
    height: 76px;
    @media(min-width: 700px) {
        margin-bottom: 2rem;
    }
`

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    border-bottom: 1px solid #efefef;
    padding: 1rem;

    @media (min-width: 700px) {
        margin-bottom: 2rem;
    }
`

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    font-size: 1.5rem;
    justify-content: space-between;
    position: relative;
    align-items: center;

    @media (min-width: calc(932px)) {
        width: 900px;
    }
`

const Title = styled.h1`
    display: none;
    @media (min-width: 700px) {
        font-weight: 100;
        display: block;
        font-size: 1.5rem;
        color: tomato;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

const Logo = styled.div `
    font-family: 'lobster', cursive;
    @media (min-width: 700px) {
        font-size: 1.5rem;
    }
`

// Functions
const renderTitle = (title) => {
    if(title) return <Title>{title}</Title>;
    return <div></div>;
}

export default function PageHeader({title}) {
    return (
        <Spacer>
            <Header>
                <Container>
                    <Logo>
                        <Link to='/'>KittyGlitter</Link>
                    </Logo>
                    {renderTitle(title)}
                    <HeaderNav />
                </Container>
            </Header>
        </Spacer>
    )
}