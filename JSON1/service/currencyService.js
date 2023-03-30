import getEnvVars from "../configuration/environment";

const {islaMujeresServiceUrl} = getEnvVars();

export const CURRENCY_MAP = {
    'MXNUSD': 'USD',
    'MXNEUR': 'EUR',
    'MXNCAD': 'CAD',
}

export const fetchCurrencyConversionRates = async () => {
    console.log('fetching exchange rates')
    return fetch(`${islaMujeresServiceUrl}/exchangeRates`)
        .then((response) => {
                if (!response.ok) {
                    return Promise.reject();
                }
                return response.json();
            }
        );
};
