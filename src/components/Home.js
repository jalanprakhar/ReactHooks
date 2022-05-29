import React, { useEffect, useState } from 'react'
import GitHubUsers from './GitHubUsers';
import Loading from './Loading';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        const getUsers = async () => {
            try {
                setLoading(true);

                const res = await fetch('https://api.github.com/users');
                const data = await res.json();
                setUsers(data);
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        }
        getUsers();
    }, [])
    if (loading) {
        return (
            <>
                <Loading />
            </>
        )
    }
    return (
        <GitHubUsers users={users} />
    )
}

export default Home
