import {
  Inject,
  Produces,
  Action,
  Controller,
  Param,
  Request,
  ErrorMessage,
  HttpError, Status
} from "gsg-typeix";

/**
 * Controller example
 * @constructor
 * @function
 * @name CoreController
 *
 * @description
 * Define controller, assign action and inject your services.
 * Each request create new instance of controller, your Injected type is injected by top level injector if is not defined
 * as local instance as providers to this controllers
 *
 * Controllers can be Inherited by thy don't necessary need's to be inherited
 */
@Controller({
  name: "core",
  providers: [] // type of local instances within new request since controller is instanciated on each request
})
export class CoreController {
  /**
   * @param {Request} request
   * @description
   * ControllerResolver reflection
   */
  @Inject(Request)
  request: Request;
  /**
   * @param {HttpError} message
   * @description
   * Error route handler
   */
  @Action("error")
  actionError(@ErrorMessage error: HttpError) {
    return "ERROR -> " + error.getCode() + " : " + error.getMessage();
  }

  /**
   * @param {HttpError} message
   * @description
   * Error route handler
   */
  @Action("fire")
  actionFireError() {
    throw new HttpError(500, "ERROR FIRE");
  }
}
