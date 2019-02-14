export declare function DeepCopyJs(argObject: any): any;
export declare function DeepCopy(argObject: any): any;
export declare function FormatDate(date: any, format: any): any;
export declare function ConvertNumberToDate(argDate: number): Date;
export declare function ConvertDateToNumber(argDate: Date): number;
export declare function GetDateOfTheWeekAtDate(date: any): any;
/**
 * 月の一日の日付で返却する。
 * @param  {[type]} date
 * @return [type]
 */
export declare function GetDateOfTheMonthAtDate(date: any): any;
export declare function GetComma(v: any): string;
export declare function GetPointValue(p: any, useComma?: boolean): string;
export declare function CopyProperty(xSrc: any, xDst: any, compareFunc?: any): boolean;
export declare function equalIgnoreCase(arg1: string, arg2: string): boolean;
export declare function getRandomInt(min: any, max: any): any;
export declare function CreateGuidKey(): string;
/**
 * format number with fill
 * ex) FormatNumberAsFillSize(30, '0', 6) => 000030
 *
 * @export
 * @param {*} argNum
 * @param {*} argFill
 * @param {*} argCount
 * @returns
 */
export declare function FormatNumberAsFillSize(argNum: any, argFill: any, argCount: any): any;
