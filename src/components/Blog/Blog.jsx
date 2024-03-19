import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author, hashtags, reading_time, posted_date, author_img } = blog;
    console.log(blog)
    return (
        <div className='space-y-7 py-7'>
            <img src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <section className='flex items-center gap-5'>
                    <figure className='w-[100px]'>
                        <img src={author_img} alt="" />
                    </figure>
                    <div className='space-y-3'>
                        <p className='text-2xl font-bold text title-color'>{author}</p>
                        <p className=' font-semibold text accent-color'>{posted_date}</p>
                    </div>
                </section>
                <div className='accent-color text-xl flex justify-between items-center gap-2'>
                    <p>{reading_time} min read</p>
                    <i className="fa-regular fa-bookmark"></i>
                </div>
            </div>
            <div className='space-y-6'>
                <h2 className='text-[40px] font-bold text title-color'>{title}</h2>
                <p className=' font-[500] text-xl accent-color'>{hashtags.slice(1).join(" ")}</p>
                <button className='underline text-xl font-semibold link-color hover:text-[#111111]'>Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;