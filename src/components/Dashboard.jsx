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
            <div className="gird">
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
`;

export default Dashboard
