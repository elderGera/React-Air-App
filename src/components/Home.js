import logo from "../logo.svg";
import Api from "../components/Api";
import { React, useState } from "react";
import video from "../videos/plane.mp4";

// Home Page (component)
function Home() {
    // IATA code of airline
    const [acShow, setAcShow] = useState("");
    // Records limit per page
    const [limitShow, setLimitShow] = useState([]);

    const submit = (e) => {
        e.preventDefault();
        document.getElementById("info-data").style.display = "block";
    };

    return (
        <div className="App">
            {/* start of header */}
            <header className="App-header">
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
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    Popular airline routes
                    <br />
                    with Flight Data
                </h1>
            </header>
            {/* end of header */}
            {/* start of main */}
            <main className="App-main">
                {/* start of form */}
                {/* TEST */}
                <form onSubmit={submit} data-testid="app-form">
                    <input
                        className="input-info"
                        value={acShow}
                        onChange={(e) => setAcShow(e.target.value)}
                        type="text"
                        style={{ textTransform: "uppercase" }}
                        minLength={2}
                        maxLength={2}
                        id="aircode"
                        name="aircode"
                        placeholder="IATA code of airline"
                        required
                    />
                    <br />
                    <input
                        className="input-info"
                        value={limitShow}
                        onChange={(e) => setLimitShow(e.target.value)}
                        type="number"
                        style={{ textTransform: "uppercase" }}
                        min="1"
                        max="1000"
                        id="limit"
                        name="limit"
                        placeholder="Records limit per page"
                        required
                    />
                    <br />
                    <input
                        className="btn"
                        type="reset"
                        value="Clear"
                        onClick={() => {
                            setAcShow("");
                            setLimitShow([]);
                            document.getElementById("info-data").style.display =
                                "none";
                        }}
                    />
                    <input
                        className="btn"
                        type="submit"
                        value="Start to Search"
                    />
                    <br />
                </form>
                {/* end of form */}
                {/* start of data's API */}
                <div id="info-data">
                    <Api ac={`${acShow}`} limit={`${limitShow}`} />
                    <div className="Link">
                        <a
                            className="btn"
                            href="./information"
                            onClick={() => {
                                window.scroll({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            Show more information
                        </a>
                    </div>
                </div>
                {/* end of data's API */}
            </main>
            {/* end of main */}
            {/* start of footer */}
            <footer className="App-footer">
                <p>&copy; Copyright 2024 Oleksandr Gerasymenko</p>
            </footer>
            {/* end of footer */}
        </div>
    );
}

export default Home;
