import { useEffect, useState } from "react";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    console.log(blogs)

    useEffect( () => {
        fetch ('/data.json')
        .then (res => res.json())
        .then (data => setBlogs(data))
    } , [])

    return (
        <div>
            <h1>the blog length is: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;