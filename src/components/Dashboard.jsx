import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar';
import Analytics from './Analytics';
import FAQs from './FAQs';
import Earnings from './Earnings';
import Transfers from './Transfers';
import Profile from './Profile';

function Dashboard() {
    return (
        <Section>
            <NavBar />
            <div className="grid">
                <div className="row__one">
                    <Analytics />
                    <FAQs />
                </div>
                <div className="row__two">
                    <Earnings />
                    <Transfers />
                    <Profile />
                </div>
            </div>
        </Section>
    )
}

const Section = styled.section`
    margin-left: 18vw;
    padding: 2rem;
    height: 100%;
    .grid {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 1rem;
        margin-top: 2rem;
        .row__one {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            height: 50%;
            gap: 1rem;
        } 
        .row__two {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            height: 50%;
            gap: 1rem;
        }
    }
`;

export default Dashboard
