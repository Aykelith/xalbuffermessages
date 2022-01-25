export type VariableTypeReaderFunc_NormalReturn = { data: any; nextByte: number };
export type VariableTypeReaderFunc_NeedMoreReturn = { needMore: true };
export type VariableTypeReaderFunc_Return = VariableTypeReaderFunc_NormalReturn | VariableTypeReaderFunc_NeedMoreReturn;

export type VariableTypeReaderFunc = (offset: number, buffer: Buffer) => VariableTypeReaderFunc_Return;
