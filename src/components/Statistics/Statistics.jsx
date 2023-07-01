import { StatisticsItemList } from "./StatisticsItemList";
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
    return (
        <section className={css.statistics}>
            <div className={css.wrapper}>
                {title && <h2 className={css.title}>Upload stats</h2>}
                <StatisticsItemList data={stats} />
            </div>
        </section>
    );
};

Statistics.defaultProps = {
    title: '',
    stats: [],
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }.isRequired)),
};