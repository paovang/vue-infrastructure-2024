export const hasRequiredRole = (userRoles: string[], requiredRoles: string[]) => {
    return requiredRoles.some((role: string) => userRoles.includes(role));
};


export const roleGuard = (to: any, from: any, next: any) => {
    console.log('roleGuard: ', from);
    const userRolesString = localStorage.getItem('roles');
    const requiredRoles = to.meta.requiredRoles;

    let userRoles: string[] = [];
    if (userRolesString !== null) {
        userRoles = [userRolesString]; // Assign the value directly to userRoles
    }


    if (hasRequiredRole(userRoles, requiredRoles)) {
        next();
    } else {
        next({ name: 'customer' });
    }
}   