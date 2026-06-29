export const CURRENCY_API_URL = "https://api.exchangerate.host/latest";

export const FIAT_CURRENCIES = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "NGN"];

export const CRYPTO_CURRENCIES = ["BTC", "ETH", "LTC", "XRP", "BCH", "BNB", "DOGE"];

export const CurrencySymbols: Record<string, { symbol: string; logo: string }> = {
  USD: { symbol: "$", logo: "💵" },
  EUR: { symbol: "€", logo: "💶" },
  GBP: { symbol: "£", logo: "💷" },
  JPY: { symbol: "¥", logo: "💴" },
  AUD: { symbol: "A$", logo: "🇦🇺" },
  CAD: { symbol: "C$", logo: "🇨🇦" },
  NGN: { symbol: "₦", logo: "🇳🇬" },
  BTC: { symbol: "₿", logo: "₿" },
  ETH: { symbol: "Ξ", logo: "Ξ" },
  LTC: { symbol: "Ł", logo: "Ł" },
  XRP: { symbol: "XRP", logo: "XRP" },
  BCH: { symbol: "BCH", logo: "BCH" },
  BNB: { symbol: "BNB", logo: "BNB" },
  DOGE: { symbol: "Ð", logo: "Ð" },
};

export const FiatConfig: { name: string; symbol: string; logo: string }[] = FIAT_CURRENCIES.map(
  (currency) => ({
    name: currency,
    symbol: CurrencySymbols[currency]?.symbol || currency,
    logo: CurrencySymbols[currency]?.logo || "",
  }),
);

export const CryptoConfig: { name: string; symbol: string; logo: string }[] = CRYPTO_CURRENCIES.map(
  (currency) => ({
    name: currency,
    symbol: CurrencySymbols[currency]?.symbol || currency,
    logo: CurrencySymbols[currency]?.logo || "",
  }),
);
