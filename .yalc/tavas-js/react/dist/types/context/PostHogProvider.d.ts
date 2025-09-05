import React, { Dispatch, SetStateAction } from 'react';
import { Tavas } from 'tavas-js';
export interface FeatureFlags {
    active?: string[];
    enabled: {
        [flag: string]: boolean | string;
    };
}
interface PostHogProviderProps {
    client: Tavas;
    children: React.ReactNode | React.ReactNode[] | null;
}
export interface PostHogProviderValue {
    client?: Tavas;
    featureFlags: FeatureFlags;
    setFeatureFlags: Dispatch<SetStateAction<FeatureFlags>>;
}
export declare const PostHogProvider: React.FC<PostHogProviderProps>;
export {};
//# sourceMappingURL=PostHogProvider.d.ts.map