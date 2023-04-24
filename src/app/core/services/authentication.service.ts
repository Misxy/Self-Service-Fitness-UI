import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, of, tap } from 'rxjs';

export const routeGuard = () => {
  const router: Router = inject(Router);
  const authService: AuthenticationService = inject(AuthenticationService);
  return authService.isAvailable().pipe(
    tap(value => {
      return value ? true : router.navigate(['/']);
    })
  );
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _isLoggedIn: boolean = false;
  constructor() {}

  isAvailable(): Observable<boolean> {
    return of(this._isLoggedIn).pipe(
      tap(() => {
        console.log('this._isLoggedIn: ', this._isLoggedIn);
      })
    );
  }
  login(): void {
    this._isLoggedIn = true;
  }
  logout(): void {
    this._isLoggedIn = false;
  }
}
