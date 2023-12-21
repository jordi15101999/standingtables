import { Container, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

const SerieA = () => {
  const [table, setTable] = useState([]);

  const getTable = async () => {
    const response = await fetch(
      "https://livescore-api.com/api-client/competitions/standings.json?competition_id=4&key=Rqy9nSLFDFYJfeES&secret=oVkGVGMdllZw0qaRRI1eAMUdrTXH7Bzw"
    );
    const kocak = await response.json();

    setTable(kocak.data.table);
  };

  useEffect(() => {
    getTable();
  }, []);

  return (
    <div className="tables">
      <div className="d-flex gap-4 align-items-center justify-content-center py-5">
        <Image
          src="/seriea.png"
          fluid
          style={{ height: "110px", width: "100px" }}
        ></Image>
        <h3 className="">Standings 2023/2024</h3>
      </div>
      <Container>
        <Table striped hover responsive variant="primary" className="">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
            </tr>
          </thead>
          {table &&
            table.map((team) => (
              <tbody key={team.team_id}>
                <tr>
                  <td>{team.rank}</td>
                  <td>{team.name}</td>
                  <td>{team.matches}</td>
                  <td>{team.won}</td>
                  <td>{team.drawn}</td>
                  <td>{team.lost}</td>
                  <td>{team.goals_scored}</td>
                  <td>{team.goals_conceded}</td>
                  <td>{team.goal_diff}</td>
                  <td>{team.points}</td>
                </tr>
              </tbody>
            ))}
        </Table>
      </Container>
    </div>
  );
};

export default SerieA;
