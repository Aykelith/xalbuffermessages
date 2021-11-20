//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readDoubleBE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    return { data: buffer.readDoubleBE(offset), nextByte: VariableTypeLength[VariableType.DOUBLE_BE] };
};
