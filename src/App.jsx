import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
 
  const [bookmarks, setBookmark] = useState([]);

  // Blog event, to add blog title to the bookmark
  const handleBookmarkTitle = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmark(newBookmark)
  }

  return (
    <>
     <Header></Header>
     <div className=' lg:flex justify-between items-start gap-4 mt-10'>
      <Blogs handleBookmarkTitle={handleBookmarkTitle}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
