import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";



const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.wallpaper} src="https://cdn.wallpapersafari.com/22/59/Ol5ocv.jpg" alt='img'/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={props.profile.photos.large} alt='img'/> + description
            </div>
        </div>
    )
}
export default ProfileInfo;