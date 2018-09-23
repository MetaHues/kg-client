import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HeaderNav from '../../navigation/HeaderNav'

// style
const Header = styled.header`
    background-color: white;
    border-bottom: 1px solid #efefef;
    margin-bottom: 2rem;
    padding: 1rem;
`

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    font-size: 2rem;
    justify-content: space-between;
    position: relative;
    align-items: center;

    @media (min-width: 900px) {
        width: 900px;
    }
`

const Title = styled.h1`
    font-size: 2rem;
    color: tomato;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

const Logo = styled.div `
    font-family: 'lobster', cursive;
`

// Functions
const renderTitle = (title) => {
    if(title) return <Title>{title}</Title>;
    return <div></div>;
}

export default function PageHeader({title}) {
    return (
        <Header>
            <Container>
                <Logo>
                    <Link to='/'>KittyGlitter</Link>
                </Logo>
                {renderTitle(title)}
                <HeaderNav />
            </Container>
        </Header>
    )
}