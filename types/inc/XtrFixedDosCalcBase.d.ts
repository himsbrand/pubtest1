/**
 * @file    XtrFixedDosCalcBase.ts
 * @author  choi sunwoo
 * @version 1.0.0
 * @since   1.0.8
 */
import { IFixedDosCalcObject, IFixedDosConfig } from "./IFixedDosCalcObject";
import { ClassBase } from "./ClassBase";
import { IFixedIndexData } from "./Common";
export declare class XtrFixedDosCalcBase extends ClassBase implements IFixedDosCalcObject {
    __OBJECT_IDENTIFY_KEY__: string;
    protected m_piIndexData: IFixedIndexData;
    protected m_piFdc: IFixedDosConfig;
    constructor();
    didDestroy(): void;
    protected GetIFixedIndexData(): IFixedIndexData;
    protected SetPlotName(name: string, plotNo: number): void;
    protected SetParamData(name: string, data: any, at?: number): void;
    protected GetParamDatas(output?: any): any;
    protected GetParamData(name: string, at?: number): any;
    protected didInitPlots(): void;
    protected didInitParameters(): void;
    protected didReloadParameters(): void;
    protected didResetVariables(piFdc?: IFixedDosConfig): void;
    protected ProcPlot(isReal?: boolean, options?: any): void;
    SetConfigObject(piFdc: IFixedDosConfig): void;
    PreLoad(piIndexData: IFixedIndexData): boolean;
    Init(options?: any, piFdc?: IFixedDosConfig): boolean;
    Start(options?: any, piFdc?: IFixedDosConfig): boolean;
    AfterProc(options?: any, piFdc?: IFixedDosConfig): boolean;
    Update(options?: any, piFdc?: IFixedDosConfig): boolean;
    protected GetDataO(piIndexData?: IFixedIndexData): any;
    protected GetDataH(piIndexData?: IFixedIndexData): any;
    protected GetDataL(piIndexData?: IFixedIndexData): any;
    protected GetDataC(piIndexData?: IFixedIndexData): any;
    protected GetDataV(piIndexData?: IFixedIndexData): any;
    protected GetDataD(piIndexData?: IFixedIndexData): any;
    protected GetDataAmount(piIndexData?: IFixedIndexData): any;
    protected GetDataOI(piIndexData?: IFixedIndexData): any;
    protected GetResultAt(at: number, piIndexData?: IFixedIndexData): import("./Common").IVector;
    protected GetPlotDataAt(at: number, piIndexData?: IFixedIndexData): import("./Common").IVector;
    protected GetLocalStaticVar(): any;
    protected GetParameters(): any;
}
