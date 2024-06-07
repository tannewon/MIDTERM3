import axios from "axios";
import { useEffect, useState } from "react";
// import RepoItem from "./RepoItem";

function Repos(props) {
  const repos= props.repos
  return repos?.map((repo) => <RepoItem props={repo} />);
}
export default Repos;