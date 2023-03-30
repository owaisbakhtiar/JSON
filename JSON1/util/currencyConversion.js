export default (amount, conversionRate) => {
    let floatAmount = parseFloat(amount);

    let convertedAmount = floatAmount * conversionRate;
    if (convertedAmount) {
        return "" + convertedAmount.toFixed(2);
    } else {
        return "0";
    }
};
