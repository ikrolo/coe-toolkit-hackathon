import { Workflow, Out } from "vrotsc-annotations";

@Workflow({
    name: "Sample Workflow",
    path: "MyOrg/MyProject"
})
export class SampleWorkflow {
    public install(foo: string, bar: string, @Out result: any): void {
        System.log(`foo=${foo}, bar=${bar}`);
        result = "result value";
    }
}
