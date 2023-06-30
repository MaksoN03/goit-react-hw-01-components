import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { ProfileList } from './ProfileList';

export const Profile = ({ items }) => {
  const {
    username = '',
    tag,
    location,
    avatar
  } = items;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          width={120}
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ProfileList  items={items}/>     
    </div>
  );
};

Profile.defaultProps = {
  username: '',
  tag: '',
  location: '',
  avatar: '',
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};