export declare class ClassBase {
    protected fixed_uniqueKey: string;
    protected fixed_objectName: string;
    uniqueKey: string;
    OBJECT_NAME: string;
    constructor();
    didDestroy(): void;
}
export declare function ObjectDelete(target: ClassBase): any;
export declare function ObjectsDelete(targets: ClassBase[]): any;
