import { useState } from 'react';
import styled from 'styled-components';

function List({ teamList }) {
  const teamA = [];

  teamList.map((item) => {
    for (let i = 1; i <= teamList.length / 2; i++) {
      if (item.id === i) {
        teamA.push({
          name: item.name,
          id: item.id,
        });
      }
    }
    return null;
  });
  const teamB = [];

  teamList.map((item) => {
    for (let i = teamList.length / 2 + 1; i <= teamList.length; i++) {
      if (item.id === i) {
        teamB.push({
          name: item.name,
          id: item.id,
        });
      }
    }
    return null;
  });

  const [arrayA, setArrayA] = useState(teamA);
  const [arrayB, setArrayB] = useState(teamB);
  const [idA, setIdA] = useState('');
  const [idB, setIdB] = useState('');
  const [showBtn, setShowBtn] = useState();

  const getIdA = (e) => {
    setIdA(parseInt(e.target.parentElement.id));
    setShowBtn(!showBtn);
  };

  const getIdB = (e) => {
    setIdB(parseInt(e.target.parentElement.id));
    setShowBtn(!showBtn);
  };
  const handleMoveA = () => {
    const itemFoundInA = arrayA.find((iteminA) => iteminA.id === idA);

    const filteredTeamA = arrayA.filter((item) => item.id !== itemFoundInA.id);
    setArrayA([...filteredTeamA]);

    setArrayB([...arrayB, itemFoundInA]);
    setIdA('');
    setShowBtn(!showBtn);
  };
  const handleMoveB = () => {
    const itemFoundB = arrayB.find((iteminB) => iteminB.id === idB);

    const filteredTeamB = arrayB.filter((item) => item.id !== itemFoundB.id);
    setArrayB([...filteredTeamB]);

    setArrayA([...arrayA, itemFoundB]);
    setIdB('');
    setShowBtn(!showBtn);
  };

  return (
    <Main>
      <Paragraph>Hover on any team member to move to the other group</Paragraph>
      <Container>
        <Left>
          <Header1>Team A</Header1>
          <ListA>
            {arrayA.map((item) => (
              <UlList id={item.id} key={item.id}>
                <li onMouseOver={getIdA}>{item.name}</li>
                {idA === item.id && (
                  <Button onClick={idA ? handleMoveA : handleMoveB}>
                    Move
                  </Button>
                )}
              </UlList>
            ))}
          </ListA>
        </Left>
        <Right>
          <Header2>Team B</Header2>
          <ListB>
            {arrayB.map((item) => (
              <UlList id={item.id} key={item.id}>
                <li onMouseOver={getIdB}>{item.name}</li>
                {idB === item.id && (
                  <Button onClick={idA ? handleMoveA : handleMoveB}>
                    Move
                  </Button>
                )}
              </UlList>
            ))}
          </ListB>
        </Right>
      </Container>
    </Main>
  );
}

export default List;

const Main = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Header1 = styled.h1`
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;
const Left = styled.div`
  width: 40%;
`;
const ListA = styled.div`
  list-style-type: none;
`;
const UlList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 15px;
`;
const Button = styled.button`
  padding: 6px;
  background-color: lightgray;
  text-align: center;
  width: 20%;
  align-self: center;
  border-radius: 5px;
  border-width: 0;
  cursor: pointer;
`;
const Header2 = styled.h1`
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

const Right = styled.div`
  width: 40%;
`;
const ListB = styled.div`
  list-style-type: none;
`;
const Paragraph = styled.p`
  font-size: 24px;
  text-align: center;
  background-color: whitesmoke;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 50px;
`;
