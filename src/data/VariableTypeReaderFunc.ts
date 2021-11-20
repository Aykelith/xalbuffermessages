export type VariableTypeReaderFunc = (offset: number, buffer: Buffer) => { data: any; nextByte: number };
