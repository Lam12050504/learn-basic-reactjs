import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss"
Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album }) {
    return (
        <>
            <img src={album.thumbnail} alt="" />
            <p className="title">
                {album.title}
            </p>
        </>
    );
}

export default Album;