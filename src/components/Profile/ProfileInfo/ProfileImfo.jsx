import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import photo from "../../../assets/images/user.png";



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
                {props.profile.photos.large? <img className={s.avatar} src={props.profile.photos.large} alt='img'/>:
                    <img className={s.avatar} src={photo} alt='img'/>}
            </div>
            <div>
                <span>Name: {props.profile.fullName}</span>
            </div>
            <div>
                <ProfileStatus/>
            </div>
        </div>
    )
}
export default ProfileInfo;