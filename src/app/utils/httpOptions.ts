import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'multipart/form-data',
    Authorization: sessionStorage.getItem('token') || '',
  }),
};
