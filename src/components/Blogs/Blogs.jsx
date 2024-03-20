import { useEffect, useState } from "react";
import Blog from '../Blog/Blog'
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarkTitle, handleMakeAsRead}) => {

    const [blogs, setBlogs] = useState([]);



    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="lg:w-2/3">
            {
                blogs.map((blog,index) =>
                <Blog
                    key={index}
                    blog={blog}
                    handleBookmarkTitle={handleBookmarkTitle}
                    handleMakeAsRead={handleMakeAsRead}
                    >
                        
                </Blog>)
            }
        </div>

    );
};

Blogs.propType = {
    handleBookmarkTitle: PropTypes.func,
    handleMakeAsRead: PropTypes.func
}

export default Blogs;