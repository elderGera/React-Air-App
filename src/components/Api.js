import { MY_API_TOKEN, MY_API_KEY } from "../config";
import { useEffect, useState } from "react";

function Api(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(
            `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/airline-directions?airline_code=${props.ac}&limit=${props.limit}`,
            {
                method: "GET",
                headers: {
                    "X-Access-Token": MY_API_TOKEN,
                    "X-RapidAPI-Key": MY_API_KEY,
                    "X-RapidAPI-Host":
                        "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
                },
            }
        )
            .then((response) => response.json())
            .then(setData)
            .then((data) => {
                const values = Object.values(data);
                let i = 0;
                while (i < values.length) {
                    console.log(values[i]);
                    i++;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props]);

    if (
        /[A-Z]|[a-z][A-Z]|[a-z]{2}$/g.test(props.ac) &&
        props.limit > 0 &&
        data
    ) {
        return (
            <div>
                <p>
                    Object, returns routes for which an airline
                    <br /> operates flights, sorted by popularity:
                </p>
                <pre>{JSON.stringify(data.data, null, 2)}</pre>
            </div>
        );
    } else {
        return (
            /* TEST */
            <div data-testid="start-data">
                <p>
                    Sorry, but no information could be found.
                    <br /> Perhaps you could double-check
                    <br /> your input and try again.
                </p>
            </div>
        );
    }
}

export default Api;
