import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from './Components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            thumbnail: "https://znews-photo.zadn.vn/w210/Uploaded/ofh_fdmzsofw/2021_02_15/1457872474520178826546546248288484042095065n_1612845110886122628056_1.jpg",
            title: "Tết của cô gái Việt và chồng Mỹ sau khi chữa khỏi Covid-19"
        },
        {
            id: 2,
            thumbnail: 'https://znews-photo.zadn.vn/w210/Uploaded/nugzrd/2021_02_16/1.jpg',
            title: "Khánh Hòa bác thông tin cho học sinh nghỉ học hết tháng 2"
        },
        {
            id: 3,
            thumbnail: "https://znews-photo.zadn.vn/w210/Uploaded/rohunuk/2021_02_16/Khanh.jpg",
            title: "Bắt thanh niên ép bé gái 13 tuổi quan hệ tình dục"
        }
    ]
    return (
        <div classname="Container">
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;