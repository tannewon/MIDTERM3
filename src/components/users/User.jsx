import axios from "axios";
import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Repos from "../repos/Repos";
import { TextContext } from "../TextContext";

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const { currentSearch, setCurrentSearch } = useContext(TextContext);
   const history = useHistory()
    const getUser = async (userName) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${userName}`);
            setUser(response.data);
        } catch (error) {
            console.log("Error fetching user: ", error.message);
        }
    };

    const getUserRepos = async (userName) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${userName}/repos`);
            setRepos(response.data);
        } catch (error) {
            console.log("Error fetching user repositories: ", error.message);
        }
    };
    const handleBackToTop = (e) => {
      e.preventDefault()
      const storedSearch = JSON.parse(localStorage.getItem("currentSearch"));
      if (storedSearch) {
          setCurrentSearch(storedSearch);

      }
      localStorage.removeItem("currentSearch");

      history.push("/")
    }
    useEffect(() => {
        getUser(id);
        getUserRepos(id);
    }, [id]);
    return (
        <Fragment>
            <Link to="/" onClick={handleBackToTop} className="btn btn-light">Back to Search</Link>
            Hireable: {user.hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={user.avatar_url} alt={user.name} className="round-img" style={{ width: "150px" }} />
                    <h1>{user.name}</h1>
                    <p>{user.location}</p>
                </div>
                <div>
                    {user.bio && (
                        <Fragment>
                            <h3>Bio: </h3>
                            <p>{user.bio}</p>
                        </Fragment>
                    )}
                    <a href={user.html_url} className="btn btn-dark my-1" target="_blank" rel="noopener noreferrer">Show Github Profile</a>
                    <ul>
                        <li>{user.login && <Fragment><strong>Username:</strong> {user.login}</Fragment>}</li>
                        <li>{user.company && <Fragment><strong>Company:</strong> {user.company}</Fragment>}</li>
                        <li>{user.blog && <Fragment><strong>Website: </strong><a href={user.blog} target="_blank" rel="noopener noreferrer">{user.blog}</a></Fragment>}</li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {user.followers}</div>
                <div className="badge badge-success">Following: {user.following}</div>
                <div className="badge badge-light">Repositories: {user.public_repos}</div>
                <div className="badge badge-dark">Gists: {user.public_gists}</div>
            </div>
            <div className="card text-center">
                <Repos repos={repos} />
            </div>
        </Fragment>
    );
};

export default User;