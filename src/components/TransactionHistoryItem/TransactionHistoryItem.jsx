import PropTypes from 'prop-types';
import css from 'components/TransactionHistoryItem/TransactionHistoryItem.module.css';

export const TransactionHistoryItem = ({type, amount, currency}) => {
    return (
        <tr className={css.table__row}>
            <td className={css.table__col}>{type}</td>
            <td className={css.table__col}>{amount}</td>
            <td className={css.table__col}>{currency}</td>
        </tr>
    );
}

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}