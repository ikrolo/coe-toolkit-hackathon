export interface CMDBSystem {
	type:CMDBType
	addRecord(input : CMDBAddPayload) : number
	deleteRecord(input : CMDBDeletePayload) : null
}

export enum CMDBType {
	kangaroo,
	wombat,
	platypus
}

export type CMDBAddPayload = {
	recordName:string,
	recordSize:string 
}

export type CMDBDeletePayload = {
	recordId:string
}
