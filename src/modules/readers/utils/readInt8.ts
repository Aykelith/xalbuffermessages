//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readInt8: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    return { data: buffer.readInt8(offset), nextByte: VariableTypeLength[VariableType.INT_8] };
};
