import { useEffect, useState } from "react";
import Blog from '../Blog/Blog'
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarkTitle}) => {

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
                    >
                        
                </Blog>)
            }
        </div>

    );
};

Blogs.propTypes = {
    handleBookmarkTitle: PropTypes.object.isRequired
}

export default Blogs;