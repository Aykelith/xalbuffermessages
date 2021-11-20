//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeDoubleBE: VariableTypeWriterFunc = (a: number, offset: number, buffer: Buffer) => {
    buffer.writeDoubleBE(a, offset);
    return VariableTypeLength[VariableType.DOUBLE_BE];
};
