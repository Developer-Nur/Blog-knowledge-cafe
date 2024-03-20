import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="lg:w-1/3 rounded-lg">
            <h3 className="book-mark-top p-5">
                Spent time on read : 177 min
            </h3>
            <div className="book-mark-bg mt-5 p-5 rounded-lg">
                {
                    bookmarks.map((blogTitle, index) =>
                        <Bookmark key={index} bookmarks={blogTitle}></Bookmark>
                    )
                }
            </div>


        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;