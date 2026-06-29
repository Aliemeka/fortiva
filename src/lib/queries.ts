import { CURRENCY_API_URL } from "./constants";

export const getCurrencyRates = async (inputCurrency: string, outputCurrency: string) => {
  const response = await fetch(
    `${CURRENCY_API_URL}?base=${inputCurrency}&symbols=${outputCurrency}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch currency rates: ${response.statusText}`);
  }
  const data = await response.json();
  return data.rates[outputCurrency];
};
