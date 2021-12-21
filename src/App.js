import React from 'react'
import styled from 'styled-components'
import Dashboard from './components/Dashboard'
import SideBar from './components/SideBar'


function App() {
  return (
    <Div>
      <SideBar />
      <Dashboard />
    </Div>
  )
}

const Div = styled.div``;

export default App
