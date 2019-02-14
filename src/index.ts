/**
 * @file    index.ts
 * @author  choi sunwoo
 * @version 1.0.0
 * @since   1.0.0
 */

import * as comUtils from "./common/comUtils";
import { IVector, IFixedIndexData } from "./inc/common";
import { XtrFixedDosCalcBase } from "./inc/XtrFixedDosCalcBase";
import { IFixedDosCalcWrapper, IFixedDosCalcObject, IFixedDosConfig } from "./inc/IFixedDosCalcObject";

export { IVector, IFixedIndexData };
export { comUtils };
export { XtrFixedDosCalcBase };
export { IFixedDosCalcWrapper, IFixedDosCalcObject, IFixedDosConfig };

export function test1() {
  return("test1");
}

export function test2(obj?: any) {
  return(comUtils.DeepCopy(obj));
}