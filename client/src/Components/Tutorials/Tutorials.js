import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import moment from 'moment'
import './Tutorials.css'

const Tutorials = () => {

  const navigate = useNavigate()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get("http://localhost:8001/posttutorials")
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllPosts()
  }, [])

  return (
    <div className='tutorials'>

      <div className='tutorials-header'>
        <h1>Tutorials</h1>
        <h4>
          <Link to="/tutorials">View</Link>
        </h4>
      </div>

      <div className='tutorials-content'>
        {posts.map(post => (
          <div className="tutorials-post" key={post.id}>
            <div className='tutorials-date-title-desc'>
              <p className='date'>{moment(post.date).format('YYYY-MM-DD')}</p>
              <h2 className='title' onClick={() => { navigate(`/posttutorials/${post.id}`) }}>{post.title}</h2>
              <p className='desc'>{post.desc}</p>
            </div>
            <div className='cover'>{post.cover && <img src={post.cover} alt="" />}</div>
          </div>
        ))}
      </div>
      <div className='button-tutorials'>
        <button className='button'>
          <Link to="/addtutorials">Add new post</Link>
        </button>
      </div>
    </div>
  )
}

export default Tutorials

