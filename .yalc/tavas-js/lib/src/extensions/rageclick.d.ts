import { Tavas } from '../posthog-core';
export default class RageClick {
    instance: Tavas;
    clicks: {
        x: number;
        y: number;
        timestamp: number;
    }[];
    enabled: boolean;
    constructor(instance: Tavas, enabled?: boolean);
    click(x: number, y: number, timestamp: number): void;
}
