import { CMDBFactory } from "./CMDBFactory"
import { CMDBType } from "../types/CMDBTypes";

describe("Service Extraction", () => {
    it("should return Kangaroo Service", () => {
		let factory = new CMDBFactory();
		let service = factory.getService("Kangaroo");
        expect(service.type).toBe(CMDBType.Kangaroo);
    })
    it("should return Wombat Service", () => {
		let factory = new CMDBFactory();
		let service = factory.getService("Wombat");
        expect(service.type).toBe(CMDBType.Wombat);
    })
    it("should return Platypus Service", () => {
		let factory = new CMDBFactory();
		let service = factory.getService("Platypus");
        expect(service.type).toBe(CMDBType.Platypus);
	})
	it("should throw exception when incorrectly specifying service", () => {
		let factory = new CMDBFactory();
		var functionToCall = function() { 
			factory.getService("nothing");
		}
		expect(functionToCall).toThrow("Unable to find a matching CMDB Service for cmdbType");
    })
})
