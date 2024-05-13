import { PaymentStatus } from '../enums/enums';

export interface Payment {
  amount: number;
  description: string;
  status: PaymentStatus;
  id: string;
  currency: string;
  createdAt: Date;
}

export interface PaymentsListResponse {
  currentPage: number;
  hasNext: boolean;
  items: Payment[];
  numberOfPages: number;
  pageSize: number;
  totalNumberOfItems: number;
}

export interface PaymentsListRequest {
  createdAtEnd?: string;
  createdAtStart?: string;
  page?: number;
  size?: number;
  status?: PaymentStatus;
}
