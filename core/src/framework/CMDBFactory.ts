import { CMDBSystem, CMDBType } from "../types/CMDBTypes";
import KangarooService from "../systems/kangaroo/KangarooService";
import WombatService from "../systems/wombat/WombatService";
import PlatypusService from "../systems/platypus/PlatypusService";

export class CMDBFactory {

	public getService(cmdbTypeString : string) : CMDBSystem {
		let cmdbTypeLowercase = cmdbTypeString.toLowerCase();
		let cmdbType = CMDBType[cmdbTypeLowercase];

		switch (cmdbType) {
			case CMDBType.kangaroo:
				return new KangarooService();	
			case CMDBType.wombat:
				return new WombatService();	
			case CMDBType.platypus:
				return new PlatypusService();	
			default:
				throw "Unable to find a matching CMDB Service for cmdbType";
		}
	}
}
