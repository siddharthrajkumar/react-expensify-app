export default (expenses = []) => {
    return expenses
        .map(({ amount }) => amount) 
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};