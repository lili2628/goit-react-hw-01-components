import PropTypes from 'prop-types';
import css from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    let bgc = '';

    if (isOnline === true) {
        bgc = "green";
    } else {
        bgc = "red";
    };
    
    return (
        <li className={css.item}>
            <span className={css.status} style={{backgroundColor: `${bgc}`}}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}