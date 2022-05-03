import React, { Fragment, useEffect, useState } from "react";

const ListEtudes = () => {

const [etudes, setEtudes] = useState([]);

const getEtudes = async () => {
    try {
        const response = await fetch("http://localhost:5000/etudes");

        const jsonData = await response.json();

        setEtudes(jsonData);

    } catch (err) {
        console.error(err.message)
    }
}

    useEffect(() => {
        getEtudes();
    }, []);

    return (
        <Fragment>
            {" "}
            <table className="table table-hover mt-3 text-center">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Book</th>
                    <th scope="col">Composer (Last Name)</th>
                    <th scope="col">Key</th>
                    <th scope="col">Tempo</th>
                    <th scope="col">Range</th>
                    </tr>
                </thead>
                <tbody>
                    {etudes.map(etude => (
                        <tr key={etude.etude_id}>
                            <td>{etude.etude_name}</td>
                            <td>{etude.book}</td>
                            <td>{etude.composer}</td>
                            <td>{etude.etude_key}</td>
                            <td>{etude.tempo}</td>
                            <td>{etude.range_low} - {etude.range_high}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListEtudes;