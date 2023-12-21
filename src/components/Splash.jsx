import { Tabs, Tab, Container, Card } from "react-bootstrap";
import PremierLeague from "./Leagues/PremierLeague";
import LaLiga from "./Leagues/LaLiga";
import SerieA from "./Leagues/SerieA";
import BundesLiga from "./Leagues/BundesLiga";
import LigueOne from "./Leagues/LigueOne";
import { GiSoccerBall } from "react-icons/gi";
import { FaTrophy } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";

const Splash = () => {
  return (
    <section>
      <div className="welcome mb-3 d-flex align-items-center justify-content-center text-center">
        <div className="bungkus-card">
          <Card
            className=" rounded-3 w-full p-4"
            style={{ backgroundColor: "rgba(173, 216, 230, 0.5)" }}
          >
            <h3 className="my-4 text-card">
              Live Update Standings of 5 Top Leagues in Europe{" "}
            </h3>
            <div className="">
              <FaTrophy className="mx-4 soccerball" />
              <GiSoccerBall className="mx-4 soccerball" />
              <IoStatsChartSharp className="mx-4 soccerball" />
            </div>
          </Card>
        </div>
      </div>
      <Container>
        <Tabs
          defaultActiveKey="premierleague"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="premierleague" title="Premier League">
            <PremierLeague />
          </Tab>
          <Tab eventKey="laliga" title="La Liga">
            <LaLiga />
          </Tab>
          <Tab eventKey="seriea" title="Serie A">
            <SerieA />
          </Tab>
          <Tab eventKey="bundesliga" title="Bundesliga">
            <BundesLiga />
          </Tab>
          <Tab eventKey="ligue1" title="Ligue 1">
            <LigueOne />
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default Splash;
