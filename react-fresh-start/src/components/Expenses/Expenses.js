import React, {useState} from 'react';
import './Expenses.css'
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';


const Expenses = (props) => {

    const [fliteredYear, setFilteredYear] = useState('2020');

    const changeFilterHandler =(selectedYear) =>{
        setFilteredYear(selectedYear);
     };

    const filteredExpenses = props.items.filter((expense) => {
        console.log(expense.date.getFullYear().toString());
        return expense.date.getFullYear().toString() === fliteredYear;
    });

    
    

    return(

        <div>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={fliteredYear} 
                    onChangeFilter = {changeFilterHandler}
                />

                <ExpenseChart expenses = {filteredExpenses} />

                <ExpensesList items={filteredExpenses} />
                
                
            </Card>
        </div>
    );
};

export default Expenses;