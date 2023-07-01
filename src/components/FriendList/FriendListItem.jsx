import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, isOnline, name }) => {
    return (
        <li className={css.item}>{isOnline ? (
            <span className={css.online}></span>
        ) : (
            <span className={css.offline}></span>
        )}
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};

FriendListItem.defaultProps = {
    avatar: '',
    name: '',
    isOnline: false,
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};