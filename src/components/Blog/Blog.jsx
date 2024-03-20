import PropTypes from 'prop-types';

const Blog = ({ blog,handleBookmarkTitle,handleMakeAsRead }) => {
    const { title, cover, author, hashtags, reading_time, posted_date, author_img } = blog;
    return (
        <div className='space-y-7 pb-[60px]'>
            <img src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <section className='flex items-center gap-5'>
                    <figure className='w-[100px]'>
                        <img src={author_img} alt="" />
                    </figure>
                    <div className='space-y-3'>
                        <p className=' md:text-2xl font-bold text title-color'>{author}</p>
                        <p className=' font-semibold text accent-color'>{posted_date}</p>
                    </div>
                </section>
                <div className='accent-color text-xl flex justify-between items-center gap-2'>
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleBookmarkTitle(blog)}><i className="fa-regular fa-bookmark active:text-[#6047ec]"></i></button>
                </div>
            </div>
            <div className='space-y-6'>
                <h2 className='text-[40px] font-bold text title-color'>{title}</h2>
                <p className=' font-[500] text-xl accent-color'>
                    {
                        hashtags.map((hash, index)=> <span key={index}><a href="#">#{hash} </a></span>)
                    }
                </p>
                <button onClick={()=>handleMakeAsRead(reading_time)} className='underline text-xl font-semibold link-color hover:text-[#111111]'>Mark as read</button>
            </div>
        </div>
    );
};

Blog.propType = {
    blog: PropTypes.object.isRequired,
    handleBookmarkTitle: PropTypes.object.func,
    handleMakeAsRead: PropTypes.object.func
}

export default Blog;