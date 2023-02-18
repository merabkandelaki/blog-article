import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import './RecomendedTutorials.css'

const RecomendedTutorials = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const res = await axios.get("http://localhost:8001/rectutorials")
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllPosts()
    }, [])

    return (
        <div className='recomended-tutorials'>
            <div className='recomended-tutorials-header'>
                <h1>Recommended articles</h1>
            </div>
            <div className='recomended-tutorials-content'>
                {posts.map(post => (
                    <div className="recomended-tutorials-post" key={post.id}>
                        <div className='recomended-tutorials-date-title-desc'>
                            <p className='date'>{moment(post.date).format('YYYY-MM-DD')}</p>
                            <h2 className='title'>{post.title}</h2>
                            <p className='desc'>{post.desc}</p>
                        </div>
                        <div className='cover'>{post.cover && <img src={post.cover} alt="" />}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecomendedTutorials