import React from "react";

const api = "https://api.exchangerate-api.com/v4/latest/USD";

class Currency extends React.Component {

    convert(from, to, amount) {
        return this.getResults().then((results) => {
            let liveRates = results;
            let fromRate = liveRates.rates[from];
            let toRate = liveRates.rates[to];
            return ((toRate / fromRate) * amount).toFixed(0)
        })
    }

    getResults() {
        return fetch(`${api}`)
            .then(currency => {
                return currency.json();
            })
            //.then(this.displayResults;
    }
}

export default new Currency();