//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readDoubleBE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    if (buffer.length < offset + VariableTypeLength[VariableType.DOUBLE_BE]) return { needMore: true };
    return { data: buffer.readDoubleBE(offset), nextByte: VariableTypeLength[VariableType.DOUBLE_BE] };
};
