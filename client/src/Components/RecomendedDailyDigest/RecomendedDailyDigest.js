import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import './RecomendedDailyDigest.css'

const RecomendedDailyDigest = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const res = await axios.get("http://localhost:8001/recdigest")
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllPosts()
    }, [])

    return (
        <div className='recomended-digest'>
            <div className='recomended-digest-header'>
                <h1>Recommended articles</h1>
            </div>
            <div className='recomended-digest-content'>
                {posts.map(post => (
                    <div className="recomended-digest-post" key={post.id}>
                        <div className='recomended-digest-date-title-desc'>
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

export default RecomendedDailyDigest