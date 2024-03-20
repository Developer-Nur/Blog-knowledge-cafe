import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
 
   // Blog state
  const [bookmarks, setBookmark] = useState([]);

  // Blog to add make as read state
  const [readTime, setReadTime] = useState(0);

  const handleMakeAsRead = (id,readingTime) => {
    const totalRadingTime = (readTime + readingTime);
    setReadTime(totalRadingTime)
    const remaingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmark(remaingBookMarks)
  }

  // Blog event, to add blog title to the bookmark
  const handleBookmarkTitle = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmark(newBookmark)
  }

  return (
    <>
     <Header></Header>
     <div className=' lg:flex justify-between items-start gap-4 mt-10'>
      <Blogs handleBookmarkTitle={handleBookmarkTitle} handleMakeAsRead={handleMakeAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
