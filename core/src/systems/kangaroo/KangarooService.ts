import { CMDBSystem, CMDBType, CMDBAddPayload, CMDBDeletePayload } from "../../types/CMDBTypes"; 

type KangarooCreateRecordPayload = {
	name: string,
	size: string
}

export default class KangarooService implements CMDBSystem {

	type = CMDBType.kangaroo;

	addRecord(input: CMDBAddPayload): number {
		let addPayload = <KangarooCreateRecordPayload>{
			name: input.recordName,
			size: input.recordSize
		};

		throw new Error("Method not implemented.");
	}

	deleteRecord(input: CMDBDeletePayload): null {
		throw new Error("Method not implemented.");
	}

}
