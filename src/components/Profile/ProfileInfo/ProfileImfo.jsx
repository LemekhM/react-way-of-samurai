import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.wallpaper} src="https://cdn.wallpapersafari.com/22/59/Ol5ocv.jpg" alt='img'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;