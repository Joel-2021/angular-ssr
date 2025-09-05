import { PersistentStore, PostHogConfig, Properties } from './types';
export declare const SET_QUEUE_KEY = "__mps";
export declare const SET_ONCE_QUEUE_KEY = "__mpso";
export declare const UNSET_QUEUE_KEY = "__mpus";
export declare const ADD_QUEUE_KEY = "__mpa";
export declare const APPEND_QUEUE_KEY = "__mpap";
export declare const REMOVE_QUEUE_KEY = "__mpr";
export declare const UNION_QUEUE_KEY = "__mpu";
export declare const PEOPLE_DISTINCT_ID_KEY = "$people_distinct_id";
export declare const ALIAS_ID_KEY = "__alias";
export declare const CAMPAIGN_IDS_KEY = "__cmpns";
export declare const EVENT_TIMERS_KEY = "__timers";
export declare const SESSION_RECORDING_ENABLED_SERVER_SIDE = "$session_recording_enabled_server_side";
export declare const CONSOLE_LOG_RECORDING_ENABLED_SERVER_SIDE = "$console_log_recording_enabled_server_side";
export declare const SESSION_ID = "$sesid";
export declare const ENABLED_FEATURE_FLAGS = "$enabled_feature_flags";
export declare const RESERVED_PROPERTIES: string[];
/**
 * PostHog Persistence Object
 * @constructor
 */
export declare class PostHogPersistence {
    props: Properties;
    storage: PersistentStore;
    campaign_params_saved: boolean;
    name: string;
    disabled: boolean | undefined;
    secure: boolean | undefined;
    expire_days: number | undefined;
    default_expiry: number | undefined;
    cross_subdomain: boolean | undefined;
    constructor(config: PostHogConfig);
    properties(): Properties;
    load(): void;
    /**
     * NOTE: Saving frequently causes issues with Recordings and Consent Management Platform (CMP) tools which
     * observe cookie changes, and modify their UI, often causing infinite loops.
     * As such callers of this should ideally check that the data has changed beforehand
     */
    save(): void;
    remove(): void;
    clear(): void;
    /**
     * @param {Object} props
     * @param {*=} default_value
     * @param {number=} days
     */
    register_once(props: Properties, default_value: any, days?: number): boolean;
    /**
     * @param {Object} props
     * @param {number=} days
     */
    register(props: Properties, days?: number): boolean;
    unregister(prop: string): void;
    update_campaign_params(): void;
    update_search_keyword(referrer: string): void;
    update_referrer_info(referrer: string): void;
    get_referrer_info(): Properties;
    safe_merge(props: Properties): Properties;
    update_config(config: PostHogConfig): void;
    set_disabled(disabled: boolean): void;
    set_cross_subdomain(cross_subdomain: boolean): void;
    get_cross_subdomain(): boolean;
    set_secure(secure: boolean): void;
    set_event_timer(event_name: string, timestamp: number): void;
    remove_event_timer(event_name: string): number;
}
