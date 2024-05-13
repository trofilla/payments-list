import { HttpErrorResponse } from '@angular/common/http';

export function parseErrorMessage(httpError: HttpErrorResponse): string {
  switch (httpError.status) {
    case 401:
      return 'Unauthorized';
    case 403:
      return 'Forbidden';
    case 404:
      return 'Not Found';
    default:
      return 'Try again later';
  }
}
