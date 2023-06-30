import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const ProfileList = ({ items }) => {
  const {
    stats: { views, followers, likes },
  } = items;
  return (
    <ul className={css.stats}>
      <li className={css.item}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}> {followers}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}> {views}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}> {likes}</span>
      </li>
    </ul>
  );
};

ProfileList.defaultProps = {
  stats: {},
};

ProfileList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};