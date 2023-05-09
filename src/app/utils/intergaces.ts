export interface Vendor {
    id: number;
    name: string;
    lastName: string;
    profileImageLink: string | null;
    stores: Store[];
    user: {
      id: number;
      username: string;
      email: string;
      password: string;
      active: number;
      userRoles: UserRole[];
      phone_number: string | null;
    };
    verified: boolean;
  }
  
  export interface Store {
    id: number;
    name: string;
    description: string;
    products: any[];
    storeImage: string;
    logo: string;
    address: any;
    approved: boolean;
  }
  
  export interface UserRole {
    id: number;
    roleName: string;
  }