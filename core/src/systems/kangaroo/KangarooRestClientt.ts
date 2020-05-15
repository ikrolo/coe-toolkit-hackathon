import { HttpClient, HttpClientOptions } from "com.vmware.pscoe.library.ts.http/HttpClient";

export class KangarooRestClient extends HttpClient {

	constructor(restHost : RESTHost, options? : HttpClientOptions) {
		super(restHost, null);
	}

}
