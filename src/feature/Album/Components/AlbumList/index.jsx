import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import "./styles.scss"
AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
    return (
        <section className="Album-List">
            {albumList.map(list => (
                <div key={list.id} className="Album-List-Child">
                    <Album album={list} />
                </div>
            ))}
        </section>
    );
}

export default AlbumList;