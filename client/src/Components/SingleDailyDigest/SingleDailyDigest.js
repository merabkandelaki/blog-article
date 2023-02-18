import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './SingleDailyDigest.css'
import RecomendedDailyDigest from '../RecomendedDailyDigest/RecomendedDailyDigest'
import moment from 'moment'

const SingleDailyDigest = () => {

    let { id } = useParams()

    const [post, setPost] = useState({})
    

    useEffect(() => {
        axios.get(`http://localhost:8001/post/${id}`).then((data) => {
            setPost({
                date: data.data[0].date,
                title: data.data[0].title,
                category: data.data[0].category,
                desc: data.data[0].desc,
                cover: data.data[0].cover
            })          
        })
    }, [id])

    return (
        <>
            <div className='individual-daily-digest'>
                <h1 className='title'>{post.title}</h1>
                <p className='date'>{moment(post.date).format('YYYY-MM-DD')} - <b>{post.category}</b></p>
                <div className='image'>{post.cover && <img src={post.cover} alt="" />}</div>
                <p className='desc'>{post.desc}</p>
            </div>
            <RecomendedDailyDigest />
        </>
    )
}

export default SingleDailyDigest

