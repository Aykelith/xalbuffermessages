export const writeFixedString = (a: string, length: number, offset: number, buffer: Buffer): number => {
    buffer.write(a, offset, length, 'utf8');

    return length;
};
