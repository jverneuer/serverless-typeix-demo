//exports proxy = require('aws-lambda-http-server')
import {ApplicationModule} from "./application.module";

import {httpServer, bootstrapApp, invokeRequest} from "gsg-typeix";


const app = bootstrapApp(ApplicationModule);
export function fire(event, context, callback){
    invokeRequest(app, event, context, callback);
}
