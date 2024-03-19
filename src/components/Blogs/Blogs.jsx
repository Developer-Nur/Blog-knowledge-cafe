import { useEffect, useState } from "react";
import Blog from '../Blog/Blog'


const Blogs = () => {

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
                    blog={blog}>
                </Blog>)
            }
        </div>

    );
};

export default Blogs;