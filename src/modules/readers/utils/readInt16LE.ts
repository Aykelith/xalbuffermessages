//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readInt16LE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    if (buffer.length < offset + VariableTypeLength[VariableType.INT_16_LE]) return { needMore: true };
    return { data: buffer.readInt16LE(offset), nextByte: VariableTypeLength[VariableType.INT_16_LE] };
};
