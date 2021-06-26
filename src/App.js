import React from 'react';
import './App.css';
import styled from 'styled-components';
import List from './List';

function App() {
  const teamList = [
    {
      name: 'Tim Duncan',
      id: 1,
    },
    {
      name: 'Dan coke',
      id: 2,
    },
    {
      name: 'Elon Musk',
      id: 3,
    },
    {
      name: 'Dun Foster',
      id: 4,
    },
    {
      name: 'Ben Afleck',
      id: 5,
    },
    {
      name: 'Chain Tim',
      id: 6,
    },
    {
      name: 'Steve Jobs',
      id: 7,
    },
    {
      name: 'Tosin Best',
      id: 8,
    },
  ];

  return (
    <ContainerTop>
      <List teamList={teamList} />
    </ContainerTop>
  );
}

export default App;
const ContainerTop = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 100px;
  justify-content: space-between;
`;
