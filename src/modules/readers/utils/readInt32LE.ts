//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readInt32LE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    return { data: buffer.readInt32LE(offset), nextByte: VariableTypeLength[VariableType.INT_32_LE] };
};
