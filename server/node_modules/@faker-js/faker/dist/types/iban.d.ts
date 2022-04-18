declare const _default: {
    alpha: string[];
    pattern10: string[];
    pattern100: string[];
    toDigitString: (str: string) => string;
    mod97: (digitStr: string) => number;
    formats: {
        country: string;
        total: number;
        bban: {
            type: string;
            count: number;
        }[];
        format: string;
    }[];
    iso3166: string[];
};
export = _default;
