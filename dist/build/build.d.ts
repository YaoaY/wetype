export declare class Build {
    dirs: any;
    init(): Promise<void>;
    compileTs(): Promise<void>;
    compilePug(): Promise<void>;
    compileLess(): Promise<void>;
}
