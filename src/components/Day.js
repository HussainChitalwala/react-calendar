import React from 'react';

import styles from './Day.module.scss';

export default (props) => {
    const {day, select, selected, stocks} = props;


    const generateClassName = () => {
        const list = [styles.day];

        if (day.date.isSame(selected)) list.push(styles.selected);

        if (day.isToday) list.push(styles.today);

        if (!day.isCurrentMonth) list.push(styles.differentMonth);

        return list.join(' ');
    }

    const renderTickerSymbol = (selectedStocks) => {
        return (
            <div className = {styles.symbolsWrapper}>
                {selectedStocks.map(stock => <span key = {stock.symbol} className = {styles.symbol}>{stock.symbol}</span>)}
            </div>
        );
    }

    return (
    <span 
        className = {generateClassName()}
        key = {day.date.toString()}
        onClick = {() => {select(day)}}
    >
        {stocks && stocks.length ? renderTickerSymbol(stocks) : null}
        {day.number}
    </span>
  );
}
