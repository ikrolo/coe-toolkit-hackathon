import { Workflow } from "vrotsc-annotations";

@Workflow({
    name: "Add CMDB Record",
    path: "Hackathon/CMDB"
})

export class AddCMDBRecord {
    public addRecord(CMDB: string, recordName: string, recordSize: number): void {
        System.log("add record");
    }
}
