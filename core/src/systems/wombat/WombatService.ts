import { CMDBSystem, CMDBType, CMDBAddPayload, CMDBDeletePayload } from "../../types/CMDBTypes"; 

export default class WombatService implements CMDBSystem {

	type = CMDBType.Wombat;

	addRecord(input: CMDBAddPayload): number {
		throw new Error("Method not implemented.");
	}

	deleteRecord(input: CMDBDeletePayload): null {
		throw new Error("Method not implemented.");
	}

}
