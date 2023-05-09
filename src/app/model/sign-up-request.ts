export interface Request {
	username: string;
	password: string;
	email: string;
	phone_number: string;
   
	roles?: string[];
}