export interface CMDBSystem {
	type: CMDBType
	addRecord(input: CMDBAddPayload): number
	deleteRecord(input: CMDBDeletePayload): null
}

export enum CMDBType {
	kangaroo,
	wombat,
	platypus
}

export type CMDBAddPayload = {
	recordName: string,
	recordSize: number
}

export type CMDBDeletePayload = {
	recordId: number
}
