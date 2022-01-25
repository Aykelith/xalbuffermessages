export type MessageReaderFunc_NormalReturn = { data: any[]; nextByte: number };
export type MessageReaderFunc_NeedMoreReturn = { needMore: true };
export type MessageReaderFunc_Return = MessageReaderFunc_NormalReturn | MessageReaderFunc_NeedMoreReturn;

export type MessageReaderFunc = (offset: number, offsetBeforeArgIndex: number, buffer: Buffer) => MessageReaderFunc_Return;
