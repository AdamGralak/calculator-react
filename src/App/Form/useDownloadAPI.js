import axios from 'axios';
import { useEffect, useState } from 'react';

export const useApiRates = () => {
    // Stan dla danych oraz statusu
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const getApiData = async () => {
            try {
                // Pobranie danych z API
                const response = await axios.get('https://api.currencyapi.com/v3/latest?apikey=cur_live_f2yK1IYTFVpUUghfJ9cnGk3TwNXEXdVbg6ezSl2Q');
                setRatesData({
                    status: "success",
                    data: response.data,
                    meta: response.meta,
                });
            } catch (error) {
                // Ustawienie błędu oraz statusu
                setRatesData({
                    status: "error",
                    data: null,
                });
            }
        };

        // Opóźnienie wywołania funkcji
        const timer = setTimeout(getApiData, 2000);

        // Czyszczenie timera, gdy komponent zostanie odmontowany
        return () => clearTimeout(timer);
    }, []);

    return ratesData;
};

export default useApiRates;