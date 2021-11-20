//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readDate: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    return { data: buffer.readDoubleBE(offset) * 1000, nextByte: VariableTypeLength[VariableType.DATE] };
};
