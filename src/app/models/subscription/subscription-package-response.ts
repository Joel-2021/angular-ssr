import { SubscriptionPackage } from './subscription-package';

export interface SubscriptionPackageResponse {
  showUpgrade: boolean;
  subscriptionPackDetailsResponses: SubscriptionPackage[];
}
