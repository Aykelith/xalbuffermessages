//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readDoubleLE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    return { data: buffer.readDoubleLE(offset), nextByte: VariableTypeLength[VariableType.DOUBLE_LE] };
};
