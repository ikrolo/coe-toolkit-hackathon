import { RESTMock } from "com.vmware.pscoe.library.ts.mock.rest/RESTMock";
import { KangarooService, KangarooCreateRecordPayload } from "./KangarooService";
import { KangarooRestClient } from "./KangarooRestClientt";
import { CMDBAddPayload } from "../../types/CMDBTypes";


describe("Add Records", () => {
	let expectedRequestBody: KangarooCreateRecordPayload;
	let actualRequestBody: KangarooCreateRecordPayload;
	let kangarooService: KangarooService;

	function setupPayload(recordName: string, recordSize: number): CMDBAddPayload {
		let inputPayload = <CMDBAddPayload>{
			recordName: recordName,
			recordSize: recordSize
		};

		expectedRequestBody = <KangarooCreateRecordPayload>{
			name: recordName,
			size: recordSize
		};

		let mockHost = RESTMock.createHost()
			.withHandler(`/api/record`, "POST", request => {
				actualRequestBody = request.content;
			})
			.build();

		kangarooService = new KangarooService(new KangarooRestClient(mockHost));

		return inputPayload;
	}

	it("Adds which work", () => {
		var payload = setupPayload("inputRecord", 20);
		kangarooService.addRecord(payload);

		expect(expectedRequestBody).toEqual(actualRequestBody);
	});

	it("Record Name is required", () => {

		var payload = setupPayload(null, 20);
		var functionToCall = function () {
			kangarooService.addRecord(payload);
		}
		expect(functionToCall).toThrow("CMDB Record Name is required");
	});

	it("Record Size validations", () => {
		var payload = setupPayload("record name", null);
		var functionToCall = function () {
			kangarooService.addRecord(payload);
		}
		expect(functionToCall).toThrow("CMDB Record Size is required");

		var payload = setupPayload("record name", -2);
		var functionToCall = function () {
			kangarooService.addRecord(payload);
		}
		expect(functionToCall).toThrow("CMDB Record Size must be greater than 0");
	});
});
