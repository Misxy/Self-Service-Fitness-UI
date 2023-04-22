import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, of, tap } from 'rxjs';
import { AdminModule } from 'src/app/admin/admin.module';

export const routeGuard = () => {
  const router: Router = inject(Router);
  const authService: AuthenticationService = inject(AuthenticationService);
  return authService.isAvailable().pipe(
    tap(value => {
      return value ? true : router.navigate(['/login']);
    })
  );
};

@Injectable({
  providedIn: AdminModule,
})
export class AuthenticationService {
  private _isLoggedIn: boolean = false;
  constructor() {}

  isAvailable(): Observable<boolean> {
    return of(this._isLoggedIn).pipe(
      tap(() => {
        console.log(this._isLoggedIn);
      }),
      delay(3000)
    );
  }
  login(): void {
    this._isLoggedIn = true;
  }
  logout(): void {
    this._isLoggedIn = false;
  }
}
