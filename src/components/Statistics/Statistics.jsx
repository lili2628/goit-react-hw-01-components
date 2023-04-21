import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem.jsx';

export const Statistics = ({ title, stats }) => {
    return (title) ? 
     (<section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.stat__list}>
            {stats.map(stat => (
                <StatisticsItem
                    key={stat.id}
                    label={stat.label}
                    percentage={stat.percentage}
                />
            ))}
            
        </ul>
    </section>) :
    (<section className={css.statistics}>
        
        <ul className={css.stat__list}>
            {stats.map(stat => (
                <StatisticsItem
                    key={stat.id}
                    label={stat.label}
                    percentage={stat.percentage}
                />
            ))}
            
        </ul>
    </section>)

}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}


