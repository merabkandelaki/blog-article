import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './CreatePostTutorials.css'

const CreatePostTutorials = () => {
    const [post, setPost] = useState({
        category: "",
        title: "",
        desc: "",
        date: "",
        cover: "",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    console.log(post)

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8001/posttutorials", post)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(post)

    return (
        <div className='form'>

            <h1>Add New Post</h1>

            <input
                type="text"
                placeholder='category'
                onChange={handleChange}
                name="category"
            />

            <input
                type="text"
                placeholder='title'
                onChange={handleChange}
                name="title"
            />

            <input
                type="text"
                placeholder='desc'
                onChange={handleChange}
                name="desc"
            />

            <input
                type="text"
                placeholder='date posted'
                onChange={handleChange}
                name="date"
            />

            <input type="text"
                placeholder='cover'
                onChange={handleChange}
                name="cover"
            />

            <button className='formButton' onClick={handleClick}>Add Post</button>

        </div>
    )
}

export default CreatePostTutorials
