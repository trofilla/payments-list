import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentListService } from './payment-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PaymentListService', () => {
  let service: PaymentListService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BrowserModule, BrowserAnimationsModule],
      providers: [PaymentListService, MatSnackBar],
    });

    service = TestBed.inject(PaymentListService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get payments list', () => {
    const mockResponse = {
      currentPage: 1,
      hasNext: false,
      items: [
        { id: '1', amount: 100, description: 'Payment 1', status: 'SUCCESS', currency: 'USD', createdAt: new Date() },
      ],
      numberOfPages: 1,
      pageSize: 5,
      totalNumberOfItems: 1,
    };

    service.paymentsList.subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service.paymentUrl}?page=0&size=5`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle error when getting payments list', () => {
    const errorMessage = 'Internal Server Error';

    service.paymentsList.subscribe(
      () => {},
      error => {
        expect(error.message).toBe(errorMessage);
      },
    );

    const req = httpMock.expectOne(`${service.paymentUrl}?page=0&size=5`);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('Internal Server Error'), { status: 500 });
  });

  it('should show notification on error', () => {
    const errorMessage = 'Internal Server Error';

    jest.spyOn(service['_snackBar'], 'open');

    service['showNotification'](errorMessage);

    expect(service['_snackBar'].open).toHaveBeenCalledWith(errorMessage, '', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  });
});
