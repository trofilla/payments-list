import { HttpParams } from '@angular/common/http';

export function removeUndefinedFields(obj: any): HttpParams | undefined {
  let params = new HttpParams();
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    } else {
      params = params.set(key, obj[key]);
    }
  }
  return params;
}
