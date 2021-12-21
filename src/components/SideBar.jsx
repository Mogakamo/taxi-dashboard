import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";


function SideBar() {
    return (
        <>
            <Section>
                <div className="top">
                    <div className="brand">
                        <FaTaxi />
                        <span>My taxi</span>
                    </div>
                    <div className="toggle"></div>
                    <div className="links">
                        <ul>
                            <li>
                                <a href="#">
                                    <MdSpaceDashboard />
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <RiDashboard2Fill />
                                    <span>Riders</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaAddressCard />
                                    <span>Payment details</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <GiTwirlCenter />
                                    <span>Learning center</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <BsFillChatTextFill />
                                    <span>FAQ's</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <IoSettings />
                                    <span>Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="logout">
                    <a href="#"><FiLogOut />
                    <span>Logout</span></a>
                </div>
            </Section>
        </>
    )
}

const Section = styled.section``;

export default SideBar
