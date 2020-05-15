import { Workflow } from "vrotsc-annotations";
import { Logger } from "com.vmware.pscoe.library.ts.logging/Logger"
import { CMDBFactory } from "../framework/CMDBFactory"
import { CMDBSystem, CMDBDeletePayload } from "../types/CMDBTypes";

@Workflow({
    name: "Delete CMDB Record",
    path: "Hackathon/CMDB"
})

export class DeleteCMDBRecord {
    public deleteCMDBRecord(CMDB: string, recordId: number): void {
        let logger = Logger.getLogger("Delete CMDB Record");
        logger.info("starting...");


        let service: CMDBSystem = new CMDBFactory().getService(CMDB);

        const payload: CMDBDeletePayload = <CMDBDeletePayload> {
            recordId: recordId
        };
        
        service.deleteRecord(payload);

        logger.info("finished deleting record");
    }
}
