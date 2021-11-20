export type MessageReaderFunc = (offset: number, buffer: Buffer) => { data: any[]; nextByte: number };
