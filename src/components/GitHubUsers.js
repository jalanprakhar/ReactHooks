import React from 'react'

function GitHubUsers({users}) {
  return (
    <>
    <h2>List of github users</h2>
    <div className="container-fluid mt-5">
        <div className="row text-center">
            {
                users.map((cur) => {
                    return (
                        <div key={cur.id}>
                            <div className="col-10 col-md-4 mt-5   ">
                                <div className="card p-2">
                                    <div className="d-flex align-items-center">
                                        <div className="image">
                                            <img src={cur.avatar_url} alt='user' className="rounded" width="155" />
                                        </div>
                                        <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textLeft">{cur.login}</h4>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    </div>

</>
  )
}

export default GitHubUsers
