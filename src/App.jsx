import NavigationBar from "./components/NavigationBar";
import Splash from "./components/Splash";

function App() {
  return (
    <>
      <NavigationBar />
      <Splash />
      <section className="mt-5">
        <div className=" text-center py-5 bg-dark text-white mt-3">
          <p>Copyright © 2023 Johannes Jordi </p>
        </div>
      </section>
    </>
  );
}

export default App;
