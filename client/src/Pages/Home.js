import React from 'react'
import BlogTemplate from '../Components/BlogTemplate/BlogTemplate'
import DailyDigest from '../Components/DailyDigest/DailyDigest'
import DesignTools from '../Components/DesignTools/DesignTools'
import Tutorials from '../Components/Tutorials/Tutorials'

const Home = () => {
  return (
    <div>
      <BlogTemplate />
      <DailyDigest />
      <DesignTools />
      <Tutorials />
    </div>
  )
}

export default Home