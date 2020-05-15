import { CMDBSystem, CMDBType, CMDBAddPayload, CMDBDeletePayload } from "../../types/CMDBTypes"; 

export class PlatypusService implements CMDBSystem {

	type = CMDBType.platypus;

	addRecord(input: CMDBAddPayload): number {
		throw new Error("Method not implemented.");
	}

	deleteRecord(input: CMDBDeletePayload): null {
		throw new Error("Method not implemented.");
	}

}
