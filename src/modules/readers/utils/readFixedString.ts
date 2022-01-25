//= Structures & Data
// Own
import { VariableTypeReaderFunc_Return } from '../../../data/VariableTypeReaderFunc';

export const readFixedString = (length: number, offset: number, buffer: Buffer): VariableTypeReaderFunc_Return => {
    if (buffer.length < offset + length) return { needMore: true };

    return { data: buffer.toString('utf8', offset, offset + length), nextByte: length };
};
