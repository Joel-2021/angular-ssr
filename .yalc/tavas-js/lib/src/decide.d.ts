import { Tavas } from './posthog-core';
import { DecideResponse } from './types';
export declare class Decide {
    instance: Tavas;
    constructor(instance: Tavas);
    call(): void;
    parseDecideResponse(response: DecideResponse): void;
}
