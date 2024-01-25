import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = new AuthService();
  const router = new Router();
  return auth.isLoggedIn$.pipe(
    tap((isLogged) => {
      if (!isLogged) {
        router.navigate(['/login']);
      }
    })
  );
};
