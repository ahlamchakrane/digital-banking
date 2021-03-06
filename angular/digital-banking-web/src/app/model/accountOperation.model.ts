import { BankAccount } from "./bankAccount.model";

export interface AccountOperation{
    id : number;
	operationDate : Date;
	amount : number;
	type : string;
	description : string;
	bankAccountDTO : BankAccount;
}