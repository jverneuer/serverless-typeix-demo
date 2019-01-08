import {Inject, Action, Controller, Request, Chain, BeforeEach, Param, Router, Status} from "gsg-typeix";
import {CoreController} from "./core";

/**
 * Controller example
 * @constructor
 * @function
 * @name HomeController
 *
 * @description
 * Define controller, assign action and inject your services.
 * Each request create new instance of controller, your Injected type is injected by top level injector if is not defined
 * as local instance as providers to this controllers.
 *
 * Controllers can be Inherited by thy don't necessary need's to be inherited
 */
@Controller({
  name: "home",
  filters: []
})

export class HomeController extends CoreController {
  /**
   * @param {Request} request
   * @description
   * ControllerResolver reflection
   */
  @Inject(Request)
  request: Request;

  /**
   * @param {Router} router
   * @description
   * Router reflection
   */
  @Inject(Router)
  router: Router;


  /**
   * @function
   * @name BeforeEach
   *
   * @description
   * before each action chain, action chains in following order if annotations are pressent
   *
   * \@FiltersInOrderBefore -> \@BeforeEach -> \@Before(action) -> \@Action(action) -> \@After(action) -> \@AfterEach -> \@FiltersInOrderAfter
   * Chain can be stopped at any level, chains are not required to be implemented !
   * Frameworks only search for \@Action("name")
   */
  @BeforeEach
  beforeEachAction(@Chain data: string): string {
    return "Before each core <- " + data;
  }
  /**
   * @function
   * @name beforeIndex
   *
   * @description
   * Before index action chain
   *
   * \@FiltersInOrderBefore -> \@BeforeEach -> \@Before(action) -> \@Action(action) -> \@After(action) -> \@AfterEach -> \@FiltersInOrderAfter
   * Chain can be stopped at any level, chains are not required to be implemented !
   * Frameworks only search for \@Action("name")
   */
  @Action("index")
  beforeIndex(@Chain data: string): Promise<string> {
    console.log(this.request.getContext()) ;
    console.log(this.request.getEvent()) ;
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Success Context: " + JSON.stringify(this.request.getContext()) + "Event: " + JSON.stringify(this.request.getEvent()));
        }, 100)
    })
  }

}
