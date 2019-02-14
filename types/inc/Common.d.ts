/**
 * @file    Common.ts
 * @author  choi sunwoo
 * @version 1.0.0
 * @since   1.0.0
 */
export declare enum ENUM_COMMON_CONST {
    eccTypeIndex = 0,
    eccTypeSearch = 1,
    eccTypeBullBear = 2,
    eccTypeSignal = 3,
    eccTypeStrategy = 3
}
export interface IVector {
    GetRawData(): any[];
    IsConstant(): boolean;
    GetConstant(): number;
    GetAt(at: any): any;
    SetAt(at: number, data: any): any;
    GetStartIndex(): number;
    GetSize(): number;
    ClearData(): void;
    DidSetAllDatas(value: any): void;
    SetStartIndex(arg: number): any;
    SetSize(arg: number): any;
}
export interface IFixedIndexData {
    GetIndexType(): number;
    GetPlotCount(): number;
    GetPlotBarCount(): number;
    GetParamCount(): number;
    GetBaselineCount(): number;
    GetIndexName(): string;
    GetIPriceVectorRef(key: string): any;
    GetIResultAt(plotNo: number): IVector;
    SetPlotName(name: string, plotNo: number): any;
    SetParamData(name: string, data: any, at?: number): any;
    GetParamDatas(output?: any): any;
    GetParamData(name: string, at?: number): any;
}
