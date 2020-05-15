import { CMDBSystem, CMDBType, CMDBAddPayload, CMDBDeletePayload } from "../../types/CMDBTypes"; 

export class WombatService implements CMDBSystem {

	type = CMDBType.wombat;

	addRecord(input: CMDBAddPayload): number {
		throw new Error("Method not implemented.");
	}

	deleteRecord(input: CMDBDeletePayload): null {
		throw new Error("Method not implemented.");
	}

}
