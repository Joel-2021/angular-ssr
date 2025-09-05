/**
 * Integrate Sentry with PostHog. This will add a direct link to the person in Sentry, and an $exception event in PostHog
 *
 * ### Usage
 *
 *     Sentry.init({
 *          dsn: 'https://example',
 *          integrations: [
 *              new posthog.SentryIntegration(posthog)
 *          ]
 *     })
 *
 * @param {Object} [posthog] The posthog object
 * @param {string} [organization] Optional: The Sentry organization, used to send a direct link from PostHog to Sentry
 * @param {Number} [projectId] Optional: The Sentry project id, used to send a direct link from PostHog to Sentry
 * @param {string} [prefix] Optional: Url of a self-hosted sentry instance (default: https://sentry.io/organizations/)
 */
import { EventProcessor, Hub, Integration } from '@sentry/types';
import { Tavas } from '../posthog-core';
export declare class SentryIntegration implements Integration {
    name: string;
    setupOnce: (addGlobalEventProcessor: (callback: EventProcessor) => void, getCurrentHub: () => Hub) => void;
    constructor(_posthog: Tavas, organization?: string, projectId?: number, prefix?: string);
}
