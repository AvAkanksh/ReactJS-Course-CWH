import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>Today</div>
            <div>
                <h1 className='expense-item__description'>Car Insurance</h1>
                <div className='expense-item__price'>Rs.100</div>
            </div>
        </div>
    );
}

export default ExpenseItem;