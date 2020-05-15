import { Workflow } from "vrotsc-annotations";
import { Logger } from "com.vmware.pscoe.library.ts.logging/Logger"
import { CMDBFactory } from "../framework/CMDBFactory"
import { CMDBSystem, CMDBAddPayload } from "../types/CMDBTypes";

@Workflow({
    name: "Add CMDB Record",
    path: "Hackathon/CMDB"
})

export class AddCMDBRecord {
    public addRecord(CMDB: string, recordName: string, recordSize: number): void {
        let logger = Logger.getLogger("Add CMDB Record");
        logger.info("starting...");

        let service: CMDBSystem = new CMDBFactory().getService(CMDB);

        const payload: CMDBAddPayload = <CMDBAddPayload> {
            recordName: recordName,
            recordSize: recordSize
        };
        
        service.addRecord(payload);

        logger.info("finished adding record");
    }
}
