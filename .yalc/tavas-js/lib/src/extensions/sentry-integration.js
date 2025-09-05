var SentryIntegration = /** @class */ (function () {
    function SentryIntegration(_posthog, organization, projectId, prefix) {
        // setupOnce gets called by Sentry when it intializes the plugin
        // 'this' is not this: PostHogLib object, but the new class that's created.
        // TODO: refactor to a real class. The types
        this.name = 'posthog-js';
        this.setupOnce = function (addGlobalEventProcessor) {
            addGlobalEventProcessor(function (event) {
                var _a, _b, _c;
                if (event.level !== 'error' || !_posthog.__loaded)
                    return event;
                if (!event.tags)
                    event.tags = {};
                var host = _posthog.config.ui_host || _posthog.config.api_host;
                event.tags['PostHog Person URL'] = host + '/person/' + _posthog.get_distinct_id();
                if (_posthog.sessionRecordingStarted()) {
                    event.tags['PostHog Recording URL'] =
                        host +
                            '/recordings/#sessionRecordingId=' +
                            _posthog.sessionManager.checkAndGetSessionAndWindowId(true).sessionId;
                }
                var exceptions = ((_a = event.exception) === null || _a === void 0 ? void 0 : _a.values) || [];
                var data = {
                    $sentry_event_id: event.event_id,
                    $sentry_exception: event.exception,
                    $sentry_exception_message: (_b = exceptions[0]) === null || _b === void 0 ? void 0 : _b.value,
                    $sentry_exception_type: (_c = exceptions[0]) === null || _c === void 0 ? void 0 : _c.type,
                    $sentry_tags: event.tags,
                };
                if (organization && projectId)
                    data['$sentry_url'] =
                        (prefix || 'https://sentry.io/organizations/') +
                            organization +
                            '/issues/?project=' +
                            projectId +
                            '&query=' +
                            event.event_id;
                _posthog.capture('$exception', data);
                return event;
            });
        };
    }
    return SentryIntegration;
}());
export { SentryIntegration };
//# sourceMappingURL=sentry-integration.js.map