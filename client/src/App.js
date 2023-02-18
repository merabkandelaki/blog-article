import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import DailyDigestPage from './Pages/DailyDigestPage'
import DesignToolsPage from './Pages/DesignToolsPage'
import TutorialsPage from './Pages/TutorialsPage'
import CreatePost from './Components/CreatePost/CreatePost'
import CreatePostDesign from './Components/CreatePostDesign/CreatePostDesign'
import CreatePostTutorials from './Components/CreatePostTutorials/CreatePostTutorials'
import SingleDailyDigest from './Components/SingleDailyDigest/SingleDailyDigest'
import SingleDesignTools from './Components/SingleDesignTools/SingleDesignTools'
import SingleTutorials from './Components/SingleTutorials/SingleTutorials'
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<CreatePost />} />
          <Route path="/adddesign" element={<CreatePostDesign />} />
          <Route path="/addtutorials" element={<CreatePostTutorials />} />
          <Route path="/dailydigest" element={<DailyDigestPage />} />
          <Route path="/designtools" element={<DesignToolsPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/post/:id" element={<SingleDailyDigest />} />
          <Route path="/postdesign/:id" element={<SingleDesignTools />} />
          <Route path="/posttutorials/:id" element={<SingleTutorials />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
