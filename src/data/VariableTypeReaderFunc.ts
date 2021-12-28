export type VariableTypeReaderFunc_NormalReturn = { data: any; nextByte: number };
export type VariableTypeReaderFunc_NeedMoreReturn = { needMore: true };
export type VariableTypeReaderFunc = (
    offset: number,
    buffer: Buffer
) => VariableTypeReaderFunc_NormalReturn | VariableTypeReaderFunc_NeedMoreReturn;
