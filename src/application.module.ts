import {IAfterConstruct, Inject, Logger, LogLevels, Methods, Module, Router} from "gsg-typeix";
import {CoreController} from "./controllers/core";
import {HomeController} from "./controllers/home";
/**
 * Application entry point
 * @constructor
 * @function
 * @name Application
 *
 * @description
 * \@Module is used to define application entry point class
 */
@Module({
    controllers: [HomeController, CoreController], // no order
    providers: [{
        provide: Logger,
        useFactory: () => {
            let logger: Logger = new Logger();
            logger.enable();
            logger.printToConsole();
            logger.setDebugLevel(LogLevels.BENCHMARK);
            return logger;
        },
        deps: []
    }, Router] // in order processed
})
export class ApplicationModule implements IAfterConstruct {




    /**
     * @param {Logger} logger
     * @description
     * Logger service
     */
    @Inject(Logger)
    logger: Logger;

    /**
     * @param {Router} router
     * @description
     * Router service
     */
    @Inject(Router)
    router: Router;

    /**
     * @function
     * @name Application#afterConstruct
     *
     * @description
     * After construct use injected values to define some behavior at entry point
     * Defining main route, all routes are processed
     */
    afterConstruct() {

        this.router.addRules([
            {
                methods: [Methods.GET],
                route: "home/index",
                url: "/"
            }
        ]);
        this.router.setError("core/error");
    }
}







