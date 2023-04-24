import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
    const { isOnline } = friends;

    let bgc = '';

    if (isOnline === true) {
        bgc = "green";
    } else {
        bgc = "red";
    };
    

    return (
        <ul className={css.friend__list}>
            {friends.map(({id, avatar, name}) => (
                <li className={css.item} key={id}>
                    <span className={css.status} style={{backgroundColor: `${bgc}`}}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        }))
}


