import axios from 'axios';
import { useEffect, useState } from 'react';

export const useApiRates = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const getApiData = async () => {
            try {
                const response = await axios.get('https://api.currencyapi.com/v3/latest?apikey=cur_live_f2yK1IYTFVpUUghfJ9cnGk3TwNXEXdVbg6ezSl2Q');
                setRatesData({
                    status: "success",
                    data: response.data,
                    meta: response.meta,
                });
            } catch (error) {
                setRatesData({
                    status: "error",
                    data: null,
                });
            }
        };

        const timer = setTimeout(getApiData, 2000);
        return () => clearTimeout(timer);
    }, []);

    return ratesData;
};

export default useApiRates;