// Subscription service types
export interface Period {
  id: number;
  months: number;
  price: string;
}

export interface Content {
  title: string;
  icon: string;
}

export interface SubscriptionService {
  id: number;
  name: string;
  consoles: number[];
  choices_level: string;
  image: string;
  contents: Content[];
  periods: Period[];
}

export type GetSubsServicesResponse = SubscriptionService[];
export type GetSubsServicesRequest = void;

export interface AuthResponse {
  token: string;
  user_id: number;
  username: string;
}

export interface AuthRequest {
  username: string;
  password: string;
}

export interface PaymentRequest {
  subscription_service_id: number;
  subscription_period_id: number;
  console_type_id: number;
  token: string;
}

export interface PaymentResponse {
  payment_url: string;
}
