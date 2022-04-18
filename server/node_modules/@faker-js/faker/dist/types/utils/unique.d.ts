export declare type RecordKey = string | number | symbol;
export declare function exec<Method extends (...parameters: any[]) => RecordKey>(method: Method, args: Parameters<Method>, opts: {
    maxTime?: number;
    maxRetries?: number;
    exclude?: RecordKey | RecordKey[];
    compare?: (obj: Record<RecordKey, RecordKey>, key: RecordKey) => 0 | -1;
    currentIterations?: number;
    startTime?: number;
}): ReturnType<Method>;
