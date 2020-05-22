import { CMDBSystem, CMDBType, CMDBAddPayload, CMDBDeletePayload } from "../../types/CMDBTypes"; 
import { HttpClient, HttpRequest, HttpClientOptions } from "com.vmware.pscoe.library.ts.http/HttpClient";

export type KangarooCreateRecordPayload = {
	name: string,
	size: number
}

export class KangarooService implements CMDBSystem {

	type = CMDBType.kangaroo;
	private client : HttpClient;

	constructor(restClient : HttpClient) {
		this.client = restClient;
	}

	addRecord(input: CMDBAddPayload): void {
		this.validateInputs(input);

		this.client.post(<HttpRequest> {
			path: "/api/record",
			content: <KangarooCreateRecordPayload>{
				name: input.recordName,
				size: input.recordSize
			}
		});
	}

	deleteRecord(input: CMDBDeletePayload): null {
		throw new Error("Method not implemented.");
	}

	private validateInputs (input: CMDBAddPayload) {
		if (input.recordName == null) {
			throw "CMDB Record Name is required";
		}
 		if (input.recordSize == null) {
			 throw "CMDB Record Size is required";
		}
 		if (input.recordSize <= 0) {
			 throw "CMDB Record Size must be greater than 0";
		}
	}
}
