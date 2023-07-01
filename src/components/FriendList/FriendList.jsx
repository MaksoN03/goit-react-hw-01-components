import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friends => (
                <FriendListItem key={friends.id} {...friends} />
            ))}
        </ul>
    );
};

FriendList.defaultProps = {
    friends: [],
    id: '',
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
    ).isRequired,
};