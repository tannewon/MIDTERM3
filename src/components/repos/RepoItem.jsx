function RepoItem(props) {
    const repo = props.props;
    return (
      <div className="repo-items">
        <div className="repo-item">
          <div className="repo-item-name">
            <a href={repo.html_url} target="_blank">
              {repo.full_name}
            </a>
          </div>
        </div>
      </div>
    );
  }
  export default RepoItem;