export const userRoles:any[] = JSON.parse(sessionStorage.getItem('roles') as string)||"" ;
export const isMarchant:boolean=sessionStorage.getItem('roles')&& userRoles?.some(user=>user.roleName==="Marchant")||false;
export const isAdmin:boolean=sessionStorage.getItem('roles')&&userRoles?.some(user=>user.roleName==="Admin")|| false;
export const id:any=sessionStorage.getItem('id');