import { Tavas } from './posthog-core';
import { DecideResponse, FeatureFlagsCallback } from './types';
import { PostHogPersistence } from './posthog-persistence';
export declare const parseFeatureFlagDecideResponse: (response: Partial<DecideResponse>, persistence: PostHogPersistence) => void;
export declare class PostHogFeatureFlags {
    instance: Tavas;
    _override_warning: boolean;
    flagCallReported: Record<string, boolean>;
    featureFlagEventHandlers: FeatureFlagsCallback[];
    reloadFeatureFlagsQueued: boolean;
    reloadFeatureFlagsInAction: boolean;
    $anon_distinct_id: string | undefined;
    constructor(instance: Tavas);
    getFlags(): string[];
    getFlagVariants(): Record<string, string | boolean>;
    /**
     * Reloads feature flags asynchronously.
     *
     * Constraints:
     *
     * 1. Avoid parallel requests
     * 2. Delay a few milliseconds after each reloadFeatureFlags call to batch subsequent changes together
     * 3. Don't call this during initial load (as /decide will be called instead), see posthog-core.js
     */
    reloadFeatureFlags(): void;
    setAnonymousDistinctId(anon_distinct_id: string): void;
    setReloadingPaused(isPaused: boolean): void;
    resetRequestQueue(): void;
    _startReloadTimer(): void;
    _reloadFeatureFlagsRequest(): void;
    getFeatureFlag(key: string, options?: {
        send_event?: boolean;
    }): boolean | string;
    isFeatureEnabled(key: string, options?: {
        send_event?: boolean;
    }): boolean;
    addFeatureFlagsHandler(handler: FeatureFlagsCallback): void;
    receivedFeatureFlags(response: Partial<DecideResponse>): void;
    override(flags: boolean | string[] | Record<string, string | boolean>): void;
    onFeatureFlags(callback: FeatureFlagsCallback): void;
}
