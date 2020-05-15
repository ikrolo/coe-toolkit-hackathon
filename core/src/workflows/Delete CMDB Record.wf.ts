import { Workflow } from "vrotsc-annotations";

@Workflow({
    name: "Delete CMDB Record",
    path: "Hackathon/CMDB"
})

export class DeleteCMDBRecord {
    public deleteCMDBRecord(CMDB: string, recordId: number): void {
        System.log("Delete record");
    }
}
