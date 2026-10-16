import "./Home.css";
import ironman from "./assets/iron-man.webp";

function Home() {
  return (
    <>
      <div className="home">
        <div className="bio">
            <h1>ENGINEERING THE IMPOSSIBLE.</h1>
        <p>
          <h3>Welcome to Stark Industries.</h3>
          Where advanced engineering meets limitless ambition. We build the
          technologies that shape tomorrow, from next-generation robotics to
          intelligent systems designed to redefine what humanity can achieve.
        </p>
        <button>EXPLORE THE ARMOR</button>
        </div>
        <div className="hero-img">
            <img src={ironman} alt="iron man" />
        </div>
      </div>

    </>
  );
}
export default Home;
