import React from 'react';
import RepoEntry from './RepoEntry.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <div>
      <img src={props.repos.avatar}/>
    {props.repos.map((ind)=>{
      return <RepoEntry ind={ind}/>
    })}
    </div>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;