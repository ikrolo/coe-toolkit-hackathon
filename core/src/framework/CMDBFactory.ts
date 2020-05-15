import { CMDBSystem, CMDBType } from "../types/CMDBTypes";
import KangarooService from "../systems/kangaroo/KangarooService";
import WombatService from "../systems/wombat/WombatService";
import PlatypusService from "../systems/platypus/PlatypusService";

export class CMDBFactory {

	public getService(cmdbTypeString : string) : CMDBSystem {
		let cmdbType = CMDBType[cmdbTypeString];

		switch (cmdbType) {
			case CMDBType.Kangaroo:
				return new KangarooService();	
			case CMDBType.Wombat:
				return new WombatService();	
			case CMDBType.Platypus:
				return new PlatypusService();	
			default:
				throw "Unable to find a matching CMDB Service for cmdbType";
		}
	}
}
