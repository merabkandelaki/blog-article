import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import moment from 'moment'
import './DailyDigest.css'

const DailyDigest = () => {

    const navigate = useNavigate()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const res = await axios.get("http://localhost:8001/post")
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllPosts()
    }, [])

    return (
        <div className='daily-digest'>

            <div className='daily-digest-header'>
                <h1>Daily Digest</h1>
                <h4>
                    <Link to="/dailydigest">View</Link>
                </h4>
            </div>

            <div className='daily-digest-content'>
                {posts.map(post => (
                    <div className="daily-digest-post" key={post.id}>
                        <div className='daily-digest-date-title-desc'>
                            <p className='date'>{moment(post.date).format('YYYY-MM-DD')}</p>
                            <h2 className='title' onClick={() => { navigate(`/post/${post.id}`) }}>{post.title}</h2>
                            <p className='desc'>{post.desc}</p>
                        </div>
                        <div className='cover'>{post.cover && <img src={post.cover} alt="" />}</div>
                    </div>
                ))}
            </div>
            <div className='button-daily-digest'>
                <button className='button'>
                    <Link to="/add">Add new post</Link>
                </button>
            </div>
        </div>
    )
}

export default DailyDigest






