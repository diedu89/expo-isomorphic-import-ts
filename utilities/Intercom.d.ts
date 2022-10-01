import DefaultIos from "./Intercom/index.ios";
import * as ios from "./Intercom/index.ios";
import DefaultWeb from "./Intercom/index.web";
import * as web from "./Intercom/index.web";

declare var _test: typeof ios;
declare var _test: typeof web;

declare var _testDefault: typeof DefaultIos;
declare var _testDefault: typeof DefaultWeb;

export * from "./Intercom/index.ios";
export default DefaultIos;
