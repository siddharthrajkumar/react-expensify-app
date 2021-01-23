import moment from 'moment';
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 4,
        description: 'Water',
        note: '',
        amount: 2500,
        createdAt: 20000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const id = expenses[2].id;
    const updates = {
        amount: 5500
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const state = expensesReducer(expenses, action);
    const updatedExpenses = expenses.map((expense) => {
        if (expense.id === id) {
            return {
                ...expense,
                ...updates
            };
        } else {
            return expense
        }
    });
    expect(state).toEqual(updatedExpenses);
});

test('should not edit an expense if expense was not found', () => {
    const id = -1;
    const updates = {
        amount: 5500
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});