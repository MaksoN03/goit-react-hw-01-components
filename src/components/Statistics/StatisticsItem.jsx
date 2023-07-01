import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export const StatisticsItem = ({ label, percentage }) => {
    return (
        <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label}> {label}</span>
            <span className={css.percentage}> {percentage} %</span>
        </li>
    );
};

StatisticsItem.defaultProps = {
    label: '',
    percentage: 0,
};

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};