import React, { useState } from 'react';
import Form from './form';


const Navbar = (props) => {
    const fetchData = props.fetchData;
    const [search, setSearch] = useState(null);
    const topics = ["business", "entertainment", "general", "health", "science", "sports", "technology"]


    const handleOnChange = (event) => {
        setSearch(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        fetchData(search, null, null);
    }

    const handleTopicChange = (event) => {
        event.preventDefault();
        const s = event.target.innerHTML;
        fetchData(null, null, s[0].toLowerCase() + s.slice(1));
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light .navbar-static-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">News Forum</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-1">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="nav-link active" aria-current="page" href="/">Location</a>
                            </li>

                            <li className="nav-item mx-1 dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Topics
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {topics.map((topic, index) => (
                                        <a className="dropdown-item" key={index} href='/' onClick={handleTopicChange}>
                                            {topic.charAt(0).toUpperCase() + topic.slice(1)}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <button type="button" className="btn btn-danger mx-1" data-toggle="modal" data-target="#Modal">
                                    Subsribe!
                                </button>

                                <div className="modal fade" id="Modal" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="ModalLabel">Subscribe to our Newsletter</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <Form/>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>

                        <form className="form-inline ml-5">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={handleOnChange} />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleOnSubmit}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar