import PropTypes from 'prop-types';
import css from 'components/StatisticsItem/StatisticsItem.module.css';

export const StatisticsItem = ({ label, percentage }) => {
    const bgc = getRandomHexColor();
    
    return (
        <li className={css.item} style={{backgroundColor: `${bgc}`}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    );
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}