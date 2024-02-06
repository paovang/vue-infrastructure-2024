import type { Router } from 'vue-router'

export function authGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem('token')
    console.log(from)
    if (token) {
      // Token exists
      if (to.name === 'login') {
        // If token exists and user navigates to login route, redirect to customer route
        next({ name: 'customer' });
      } else {
        // Token exists and user is not navigating to login route
        next();
      }
    } else {
      // Token doesn't exist
      if (to.name !== 'login') {
        // If no token and user is not navigating to login route, redirect to login
        next({ name: 'login' });
      } else {
        // No token but user is navigating to login route
        next();
      }
    }
  })
}