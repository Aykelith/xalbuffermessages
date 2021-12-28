export type MessageReaderFunc = (
    offset: number,
    offsetBeforeArgIndex: number,
    buffer: Buffer
) => { data: any[]; nextByte: number } | { needMore: true };
