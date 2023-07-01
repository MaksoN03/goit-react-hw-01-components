import { StatisticsItem } from "./StatisticsItem";
import css from "./Statistics.module.css";
import PropTypes from 'prop-types';

export const StatisticsItemList = ({ data }) => {
    return (
        <ul className={css.statList}>
            {data.map(item => (<StatisticsItem key={item.id} {...item} />))}
        </ul>
    );
};

StatisticsItemList.defaultProps = {
    data: [],
};

StatisticsItemList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, })),
};