/**
 * @file    IFixedDosCalcObject.ts
 * @author  choi sunwoo
 * @version 1.0.0
 * @since   1.0.8
 */
import { IFixedIndexData } from "./Common";
export interface IFixedDosCalcWrapper {
    SetIFixedDosCalcObject(piFdco: IFixedDosCalcObject): any;
}
export interface IFixedDosConfig {
    localStaticVar: any;
    parameters: any;
    piIndexData?: IFixedIndexData;
    piDocp?: any;
}
export interface IFixedDosCalcObject {
    didDestroy(): any;
    PreLoad(piIndexData: IFixedIndexData): any;
    Init(options?: any, piFdc?: IFixedDosConfig): any;
    Start(options?: any, piFdc?: IFixedDosConfig): any;
    AfterProc(options?: any, piFdc?: IFixedDosConfig): any;
    Update(options?: any, piFdc?: IFixedDosConfig): any;
}
