import PropTypes from 'prop-types';

const Bookmark = ({ bookmarks }) => {
    const { title } = bookmarks;
    return (
        <>
        
            <p className="bg-white px-3 py-6 text-[18px] font-semibold title-color rounded-lg mb-5" >{title}</p>
        </>
    );
};
Bookmark.propTypes = {
    bookmarks: PropTypes.object.isRequired
}
export default Bookmark;