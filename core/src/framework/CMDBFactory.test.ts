import { CMDBFactory } from "./CMDBFactory"
import { CMDBType } from "../types/CMDBTypes";

describe("Service Extraction", () => {
    it("should return Kangaroo Service", () => {
		let factory = new CMDBFactory();
		let service = factory.getService("KaNGarOo");
        expect(service.type).toBe(CMDBType.kangaroo);
    })
    it("should return Wombat Service", () => {
		let factory = new CMDBFactory();
		let service = factory.getService("womBat");
        expect(service.type).toBe(CMDBType.wombat);
    })
    it("should return Platypus Service", () => {
		let factory = new CMDBFactory();
		let service = factory.getService("PLAtyPUs");
        expect(service.type).toBe(CMDBType.platypus);
	})
	it("should throw exception when incorrectly specifying service", () => {
		let factory = new CMDBFactory();
		var functionToCall = function() { 
			factory.getService("nothing");
		}
		expect(functionToCall).toThrow("Unable to find a matching CMDB Service for cmdbType");
    })
})
