//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readInt16BE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    if (buffer.length < offset + VariableTypeLength[VariableType.INT_16_BE]) return { needMore: true };
    return { data: buffer.readInt16BE(offset), nextByte: VariableTypeLength[VariableType.INT_16_BE] };
};
