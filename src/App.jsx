import NavigationBar from "./components/NavigationBar";
import Splash from "./components/Splash";

function App() {
  return (
    <div className="bg-black">
      <NavigationBar />
      <Splash />
      <section className="mt-5">
        <div className=" text-center py-4 bg-black text-white mt-3">
          <p>Copyright © 2024 Johannes Jordi </p>
        </div>
      </section>
    </div>
  );
}

export default App;
