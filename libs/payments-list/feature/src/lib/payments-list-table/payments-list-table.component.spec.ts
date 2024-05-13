import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, of } from 'rxjs';
import { PaymentsListTableComponent } from './payments-list-table.component';
import { PaymentListService } from '@vn/internal-payments-data-access';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PaymentsListResponse, PaymentsListRequest, PaymentStatus } from '@vn/internal-payments-list-util';

describe('PaymentsListTableComponent', () => {
  let component: PaymentsListTableComponent;
  let fixture: ComponentFixture<PaymentsListTableComponent>;
  let mockPaymentListService: Partial<PaymentListService>;
  let mockSnackBar: Partial<MatSnackBar>;

  beforeEach(async () => {
    mockPaymentListService = {
      paymentsList: of({
        items: [],
        totalNumberOfItems: 0,
        currentPage: 0,
        hasNext: false,
        numberOfPages: 0,
        pageSize: 0,
      } as PaymentsListResponse),
      error: of(undefined),
      loading: new BehaviorSubject<boolean>(false),
      paymentsRequestParams: {
        next: jest.fn(),
      } as any,
    };

    mockSnackBar = {
      open: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [PaymentsListTableComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: PaymentListService, useValue: mockPaymentListService },
        { provide: MatSnackBar, useValue: mockSnackBar },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentsListTableComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load payments list on initialization', () => {
    const paymentsListResponse = {
      items: [
        { id: 1, description: 'Payment 1' },
        { id: 2, description: 'Payment 2' },
      ],
      totalNumberOfItems: 2,
    };
    (mockPaymentListService.paymentsList as any) = of(paymentsListResponse);

    fixture.detectChanges();

    expect(component.paymentsList$).toBeDefined();
    expect(component.loading$).toBeDefined();
    expect(component.error$).toBeDefined();
    expect(component.page).toEqual(0);
  });

  it('should handle page change event', () => {
    const page = 1;

    component.onPageChange(page);

    expect(component.page).toEqual(page);
    expect((mockPaymentListService.paymentsRequestParams as unknown as { next: jest.Mock }).next).toHaveBeenCalledWith({
      page,
    } as PaymentsListRequest);
  });

  it('should apply filters', () => {
    const filtersParams = { status: PaymentStatus.CAPTURED };

    component.applyFilters(filtersParams);
    expect((mockPaymentListService.paymentsRequestParams as unknown as { next: jest.Mock }).next).toHaveBeenCalledWith({
      ...filtersParams,
      page: 0,
      size: 5,
    } as PaymentsListRequest);
  });

  it('should unsubscribe onDestroy', () => {
    component.ngOnDestroy();
    expect(
      (mockPaymentListService.paymentsRequestParams as unknown as { next: jest.Mock }).next,
    ).not.toHaveBeenCalled();
  });
});
