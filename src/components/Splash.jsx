/* eslint-disable no-unused-vars */
import { Tabs, Tab, Container, Card, Image } from "react-bootstrap";
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
    <>
      <section>
        <div className="welcome mb-3 d-flex flex-column flex-md-row align-items-center justify-content-center text-center">
          <Card className="kiri p-2 bg-transparent border-0 text-white">
            <div className="bungkus-card">
              <h3 className="my-4 text-card fw-bolder">
                Live Update Standings of 5 Top Leagues in Europe
              </h3>
              <div className="d-flex justify-content-center">
                <FaTrophy className="mx-4 soccerball" />
                <GiSoccerBall className="mx-4 soccerball" />
                <IoStatsChartSharp className="mx-4 soccerball" />
              </div>
            </div>
          </Card>
          <Card className="kanan bg-transparent border-0 rounded-circle mt-3 mt-md-0">
            <Image
              className="gambar-hero"
              src="/gg1.png"
              width={100}
              height={100}
            />
          </Card>
        </div>
      </section>
      <section className="">
        <Container className="tabs-nav">
          <Tabs
            defaultActiveKey="premierleague"
            id="justify-tab-example"
            className="mb-3"
            variant="underline"
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
    </>
  );
};

export default Splash;
