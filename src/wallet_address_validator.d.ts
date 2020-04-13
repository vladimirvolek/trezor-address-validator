declare module 'trezor-address-validator' {
    export interface Currency {
        name: string,
        symbol: string,
    }

    export declare function validate(address: string, currencyNameOrSymbol: string, networkType?: string): boolean;
    export declare function getCurrencies(): Currency[];
    export declare function findCurrency(symbol: string): Currency
}

