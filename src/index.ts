/**
 * @file    index.ts
 * @author  choi sunwoo
 * @version 1.0.0
 * @since   1.0.0
 */

import * as comUtils from "./common/comUtils";
export { comUtils };

export function test1() {
  return("test1");
}

export function test2(obj?: any) {
  return(comUtils.DeepCopy(obj));
}