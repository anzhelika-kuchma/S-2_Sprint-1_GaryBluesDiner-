import Header from "./Header";
import diner from "../images/diner.png";

function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="container-home">
          <div className="home-cover-box"></div>
          <div className="home-desc-box">
            <section>
              <div className="home-top-box">
                <h1 className="home-title">
                  Gary Blue’s Diner, a home to family, friends, laughs, and{" "}
                  <br /> the Big Gary Chicken Sandwich
                </h1>
                <div className="location">
                  We are located on 898 Celadon Road
                </div>
                <div className="schedule">
                  <div>
                    <span className="underline">Our Hours of Operation</span>
                    <br /> Mon-Fri: 6am-9pm <br /> Sat: 8am-10pm <br /> Sun:
                    Closed
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="home-bottom-box">
                <div>
                  <img className="home-image" src={diner} alt="" />
                </div>
                <div className="home-paragraph">
                  Established in 1998, Gary Blue has been keeping the bellies of
                  his customers happy for over 20 years. Its location on 898
                  Celadon Road, St.John’s making it the perfect spot for hungry
                  families. Gary Blue’s has plenty of history behind it, and the
                  menu favorites include Chocolate Mudslide Pancakes and the
                  Sunriser Sandwich Plate.
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
