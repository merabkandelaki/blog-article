import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import moment from 'moment'
import './DesignTools.css'

const DesignTools = () => {

  const navigate = useNavigate()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get("http://localhost:8001/postdesign")
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllPosts()
  }, [])

  return (
    <div className='design-tools'>

            <div className='design-tools-header'>
                <h1>Design Tools</h1>
                <h4>
                   <Link to="/designtools">View</Link> 
                </h4>
            </div>

            <div className='design-tools-content'>
                {posts.map(post => (
                    <div className="design-tools-post" key={post.id}>
                        <div className='design-tools-date-title-desc'>
                            <p className='date'>{moment(post.date).format('YYYY-MM-DD')}</p>
                            <h2 className='title' onClick={() => {navigate(`/postdesign/${post.id}`)}}>{post.title}</h2>
                            <p className='desc'>{post.desc}</p>
                        </div>
                        <div className='cover'>{post.cover && <img src={post.cover} alt="" />}</div>
                    </div>
                ))}
            </div>
            <div className='button-design-tools'>
                <button className='button'>
                    <Link to="/adddesign">Add new post</Link>
                </button>
            </div>
        </div>
  )
}

export default DesignTools


