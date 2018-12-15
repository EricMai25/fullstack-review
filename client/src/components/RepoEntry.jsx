import React from 'react'

const RepoEntry = (props)=>{
    return(
        <div>
            <div>
             <img src={props.ind.avatar} height="50px" width="50px"/>
            </div>
            <p>Name:{props.ind.name}</p>
            <p>Repsitory:{props.ind.repo.name}</p>
            <p>Description:{props.ind.repo.description}</p>

        </div>

    )

}

export default RepoEntry