import css from './Transactions.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {transactions.map(({ id, type, amount, currency }) => {
                return (
                    <tbody key={id}>
                        <tr>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    </tbody>
                );
            })}
        </table>
    );
};

TransactionHistory.defaultProps = {
    transactions: [{ id: '', type: '', amount: '', currency: '' }],
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};