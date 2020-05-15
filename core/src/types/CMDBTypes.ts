export interface CMDBSystem {
	type:CMDBType
	addRecord(input : CMDBAddPayload) : number
	deleteRecord(input : CMDBDeletePayload) : null
}

export enum CMDBType {
	Kangaroo,
	Wombat,
	Platypus
}

export type CMDBAddPayload = {
	recordName:string,
	recordSize:string 
}

export type CMDBDeletePayload = {
	recordId:string
}
