//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readInt32BE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    return { data: buffer.readInt32BE(offset), nextByte: VariableTypeLength[VariableType.INT_32_BE] };
};
