import {useEffect, useReducer, useRef} from "react";
import {fetchCurrencyConversionRates} from "../service/currencyService";

export const useConversionRate = () => {
    const cache = useRef({});

    const initialState = {
        status: "idle",
        error: null,
        data: {
            quotes: {
                "MXNUSD": 0,
                "MXNEUR": 0,
                "MXNCAD": 0
            }
        }
    };

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "FETCHING":
                return {...initialState, status: "fetching"};
            case "FETCHED":
                return {
                    ...initialState,
                    status: "fetched",
                    data: action.payload
                };
            case "FETCH_ERROR":
                return {
                    ...initialState,
                    status: "error",
                    error: action.payload
                };
            default:
                return state;
        }
    }, initialState);

    useEffect(() => {
        let cancelRequest = false;

        const fetchData = async () => {
            dispatch({type: "FETCHING"});
            if (cache.current['exchangeRates']) {
                const data = cache.current['exchangeRates'];
                dispatch({type: "FETCHED", payload: data});
            } else {
                try {
                    const data = await fetchCurrencyConversionRates()
                    cache.current['exchangeRates'] = data;
                    if (cancelRequest) return;
                    dispatch({type: "FETCHED", payload: data});
                } catch (error) {
                    if (cancelRequest) return;
                    dispatch({type: "FETCH_ERROR", payload: error.message});
                }
            }
        };

        fetchData();

        return function cleanup() {
            cancelRequest = true;
        };
    }, ['']);

    return state.data.quotes;
};
