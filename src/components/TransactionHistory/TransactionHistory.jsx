import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';


export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction__history}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency}) => (
                    <tr className={css.table__row} key={id}>
                <td className={css.table__col}>{type}</td>
                <td className={css.table__col}>{amount}</td>
                <td className={css.table__col}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        }))
}