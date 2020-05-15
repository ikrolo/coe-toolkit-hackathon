import { Workflow } from "vrotsc-annotations";
import { Logger } from "com.vmware.pscoe.library.ts.logging/Logger"

@Workflow({
    name: "Delete CMDB Record",
    path: "Hackathon/CMDB"
})

export class DeleteCMDBRecord {
    public deleteCMDBRecord(CMDB: string, recordId: number): void {
        let logger = Logger.getLogger("Delete CMDB Record");
        logger.info("starting...");
    }
}
