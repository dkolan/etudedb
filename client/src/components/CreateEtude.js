import React, { Fragment, useState } from "react";

const CreateEtude = () => {

    const [etudeName, setEtudeName] = useState("");
    const [book, setBook] = useState("");
    const [composer, setComposer] = useState("");
    const [etudeKey, setEtudeKey] = useState("");
    const [tempo, setTempo] = useState("");
    const [rangeLow, setRangeLow] = useState("");
    const [rangeHigh, setRangeHigh] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { etudeName,
                            book,
                            composer,
                            etudeKey,
                            tempo,
                            rangeLow,
                            rangeHigh };
                        
            const response = await fetch("http://localhost:5000/etudes", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            console.log(response);

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
 
    return (
        <Fragment>
            
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Etude
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Etude</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmitForm}>
                                <div className="form-group row mt-2">
                                    <label className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Name" value={etudeName} onChange={e => setEtudeName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row mt-2">
                                    <label className="col-sm-2 col-form-label">Book</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Book" value={book} onChange={e => setBook(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row mt-2">
                                    <label className="col-sm-2 col-form-label">Composer</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Last Name" value={composer} onChange={e => setComposer(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row mt-2">
                                    <label className="col-sm-2 col-form-label">Key</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Key" value={etudeKey} onChange={e => setEtudeKey(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row mt-2">
                                    <label className="col-sm-2 col-form-label">Tempo</label>
                                    <div className="col-sm-10">
                                        <input type="number" min="0" className="form-control" placeholder="Tempo" value={tempo} onChange={e => setTempo(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row mt-2">
                                    <label className="col-sm-2 col-form-label">Lowest Pitch</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Lowest Pitch" value={rangeLow} onChange={e => setRangeLow(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group row mt-2">
                                    <label className="col-sm-2 col-form-label">Highest Pitch</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Highest Pitch" value={rangeHigh} onChange={e => setRangeHigh(e.target.value)} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <input type="submit" className="btn btn-success" value="Submit"></input>
                                </div>                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
};

export default CreateEtude;