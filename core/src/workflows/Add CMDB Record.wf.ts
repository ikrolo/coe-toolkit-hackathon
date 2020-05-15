import { Workflow } from "vrotsc-annotations";
import { Logger } from "com.vmware.pscoe.library.ts.logging/Logger"

@Workflow({
    name: "Add CMDB Record",
    path: "Hackathon/CMDB"
})

export class AddCMDBRecord {
    public addRecord(CMDB: string, recordName: string, recordSize: number): void {
        let logger = Logger.getLogger("Add CMDB Record");
        logger.info("starting...");
    }
}
