import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const e = {
        target: {
            value: 'rent'
        }
    };
    wrapper.find('input').simulate('change', e);
    expect(setTextFilter).toHaveBeenLastCalledWith(e.target.value);
});

test('should sort by date', () => {
    const e = {
        target: {
            value: 'date'
        }
    };
    
    wrapper.setProps({
        filters: altFilters
    });

    wrapper.find('select').simulate('change', e);
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const e = {
        target: {
            value: 'amount'
        }
    };

    wrapper.find('select').simulate('change', e);
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const paramObj = {
        startDate: moment(0).add(4, 'years'),
        endDate: moment(0).add(8, 'years')
    }

    wrapper.find('DateRangePicker').prop('onDatesChange')(paramObj);
    expect(setStartDate).toHaveBeenLastCalledWith(paramObj.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(paramObj.endDate);
});

test('should handle date focus changes', () => {
    const calenderFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
});