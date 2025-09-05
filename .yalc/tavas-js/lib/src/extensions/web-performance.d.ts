import { Tavas } from '../posthog-core';
import { DecideResponse } from '../types';
export declare class WebPerformanceObserver {
    instance: Tavas;
    remoteEnabled: boolean | undefined;
    observer: PerformanceObserver | undefined;
    constructor(instance: Tavas);
    startObservingIfEnabled(): void;
    startObserving(): void;
    stopObserving(): void;
    isObserving(): boolean;
    isEnabled(): boolean;
    afterDecideResponse(response: DecideResponse): void;
    _capturePerformanceEvent(event: PerformanceEntry): void;
    /**
     * :TRICKY: Make sure we batch these requests, and don't truncate the strings.
     */
    private capturePerformanceEvent;
}
