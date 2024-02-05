import { Container, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

const PremierLeague = () => {
  const [table, setTable] = useState([]);

  // const getTable = async () => {
  //   const response = await fetch(
  //     "https://livescore-api.com/api-client/competitions/standings.json?competition_id=2&key=Rqy9nSLFDFYJfeES&secret=oVkGVGMdllZw0qaRRI1eAMUdrTXH7Bzw"
  //   );
  //   const kocak = await response.json();

  //   setTable(kocak.data.table);
  // };
  const getTable = async () => {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "8e03edd8cb107efbb62316d54029fb44");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://v3.football.api-sports.io/standings?league=39&season=2023",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setTable(result.response[0].league.standings[0]); // Assuming the relevant data is in the 'response' property
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getTable();
  }, []);

  return (
    <div className="tables">
      <div className="d-flex align-items-center justify-content-center">
        <Image src="/pl.png" fluid className="w-25 h-25"></Image>
        <h3 className="">Standings 2023/2024</h3>
      </div>
      <Container>
        <Table striped hover responsive variant="info">
          <thead className="text-center">
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
              <tbody key={team.team.id} className="text-center">
                <tr>
                  <td>{team.rank}</td>
                  <td className="d-flex gap-3 ">
                    <Image
                      src={team.team.logo}
                      alt="team-logo"
                      width={30}
                      height={30}
                      roundedCircle
                    />
                    {team.team.name}
                  </td>
                  <td>{team.all.played}</td>
                  <td>{team.all.win}</td>
                  <td>{team.all.draw}</td>
                  <td>{team.all.lose}</td>
                  <td>{team.all.goals.for}</td>
                  <td>{team.all.goals.against}</td>
                  <td>{team.goalsDiff}</td>
                  <td>{team.points}</td>
                </tr>
              </tbody>
            ))}
        </Table>
        {/* <Table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>
            {table &&
              table.map((team) => (
                <tr key={team.rank}>
                  <td>{team.rank}</td>
                  <td>{team.team.name}</td>
                </tr>
              ))}
          </tbody>
        </Table> */}
      </Container>
    </div>
  );
};

export default PremierLeague;
