import { CMDBSystem, CMDBType } from "../types/CMDBTypes";
import { KangarooService } from "../systems/kangaroo/KangarooService";
import { PlatypusService } from "../systems/platypus/PlatypusService";
import { WombatService } from "../systems/wombat/WombatService";
import { KangarooRestClient } from "../systems/kangaroo/KangarooRestClientt";
import { RESTMock } from "com.vmware.pscoe.library.ts.mock.rest/RESTMock";

export class CMDBFactory {

	public getService(cmdbTypeString : string) : CMDBSystem {
		let cmdbTypeLowercase = cmdbTypeString.toLowerCase();
		let cmdbType = CMDBType[cmdbTypeLowercase];

		switch (cmdbType) {
			case CMDBType.kangaroo:
				let restClient = new KangarooRestClient(RESTMock.createHost().build());
				return new KangarooService(restClient);
			case CMDBType.wombat:
				return new WombatService();	
			case CMDBType.platypus:
				return new PlatypusService();	
			default:
				throw "Unable to find a matching CMDB Service for cmdbType";
		}
	}
}
