import { React } from "react";
import video from "../videos/plane.mp4";

// Information Page (component)
function Information() {
    return (
        <div className="App">
            {/* start of header */}
            <header className="Information-header">
                <video
                    src={video}
                    width="1920"
                    height="1080"
                    autoPlay
                    loop
                    muted
                    playsInline
                    id="video"
                ></video>
                <h1 id="par">Popular airline routes</h1>
            </header>
            {/* end of header */}
            {/* start of main */}
            <main className="Information-main">
                <div>
                    <p>
                        Returns routes for which an airline operates flights,
                        sorted by popularity.
                    </p>
                    <h2>Request</h2>
                    <a
                        className="App-link"
                        href="http://api.travelpayouts.com/v1/airline-directions?airline_code=SU&limit=10&token=PutHereYourToken"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        http://api.travelpayouts.com/v1/airline-directions?airline_code=SU&limit=10&token=PutHereYourToken
                    </a>
                    <h3>Request parameters</h3>
                    <ul>
                        <li>airline_code — IATA code of airline.</li>
                        <li>
                            limit — records limit per page. Default value is
                            100. Not less than 1000.
                        </li>
                        <li>token — individual affiliate token.</li>
                    </ul>
                    <h2>Response example</h2>
                    {/* TEST */}
                    <div data-testid="example">
                        <pre>
                            {JSON.stringify(
                                {
                                    success: true,
                                    data: {
                                        "MOW-BKK": 187491,
                                        "MOW-BCN": 113764,
                                        "MOW-PAR": 91889,
                                        "MOW-NYC": 77417,
                                        "MOW-PRG": 71449,
                                        "MOW-ROM": 67190,
                                        "MOW-TLV": 62132,
                                        "MOW-HKT": 58549,
                                        "MOW-GOI": 47341,
                                        "MOW-IST": 45553,
                                    },
                                    error: null,
                                    currency: "rub",
                                },
                                null,
                                2
                            )}
                        </pre>
                    </div>
                    <h3>Description of response</h3>
                    <p>
                        Returns a list of popular routes of an airline, sorted
                        by popularity.
                    </p>
                </div>

                <p id="info-bottom">
                    Travel insights with&nbsp;
                    <a
                        className="App-link"
                        href="https://rapidapi.com/Travelpayouts/api/flight-data/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Travelpayouts Data API
                    </a>
                </p>
                <div className="Link">
                    <a className="btn" href="/">
                        &larr; Home
                    </a>
                </div>
            </main>
            {/* end of main */}
            {/* start of footer */}
            <footer className="Information-footer">
                <p>&copy; Copyright 2024 Oleksandr Gerasymenko</p>
            </footer>
            {/* end of footer */}
        </div>
    );
}

export default Information;
