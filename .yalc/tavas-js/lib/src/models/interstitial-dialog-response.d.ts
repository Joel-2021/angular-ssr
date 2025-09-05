import { InterstitialStatus } from './enums/interstitial-status';
import { InterstitialButtonTypes } from './enums/interstitial-button-types';
export interface InterstitialButtonAction {
    android: string;
    ios: string;
    web: string;
}
export interface InterstitialButtonPayload {
    title?: string;
    body?: string;
    image?: string;
    linkURL?: string;
    mediaId?: string;
    uiCategorySlug?: string;
    uiCategoryTitle?: string;
    homeScreenType?: string;
    canvasCode?: string;
}
export interface InterstitialButton {
    title: string;
    bgColor: string;
    textColor: string;
    cornerRadius: number;
    type: InterstitialButtonTypes;
    actions: InterstitialButtonAction | null;
    payload: InterstitialButtonPayload | null;
}
export interface CampaignData {
    buttons: InterstitialButton[];
    subTitle: string;
    title: string;
    description: string;
    imageUrl: string;
}
export interface InterstitialPopupResponse {
    campaign_name: string;
    campaign_id: string;
    cohort_id: string;
    campaignData: CampaignData;
    startTime: string;
    endTime: string;
    createdTime: string;
    status: InterstitialStatus;
}
