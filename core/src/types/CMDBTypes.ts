export interface CMDBSystem {
	type: CMDBType
	addRecord(input: CMDBAddPayload): void
	deleteRecord(input: CMDBDeletePayload): void
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
