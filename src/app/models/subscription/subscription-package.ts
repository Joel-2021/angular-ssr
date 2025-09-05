import { PlatformsEnum } from '../core/platforms-enum';
import { SubscriptionProduct } from './subscription-product';

export interface SubscriptionPackage {

  basePrice: number;
  deleted: boolean;
  description: string;
  durationDays: number;
  durationDaysText: string;
  id: string;
  mau: number;
  listedPrice: number;
  isActive: boolean;
  packBenefits: string[];
  paymentGatewaysAllowed: string[];
  platforms: PlatformsEnum[];
  product: SubscriptionProduct;
  recurringCycleCount: number;
  recurringFrequency: string;
  title: string;
  isApplicableToPurchase: boolean;
  currency: SubCurrency;
}

interface SubCurrency {
  code:	string;
  name: string;
  symbol: string;
}


