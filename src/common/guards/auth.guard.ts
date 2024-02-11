import type { Router } from 'vue-router'

export function authGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem('token');
    console.log('authGuard: ', from);

    if (to.meta.skipAuthCheck) {
      next();
    } else {
      if (token) {
        if (to.name === 'login') {
          next({ name: 'customer' });
        } else {
          next();
        }
      } else {
        if (to.name !== 'login') {
          next({ name: 'login' });
        } else {
          next();
        }
      }
    }
  })
}
