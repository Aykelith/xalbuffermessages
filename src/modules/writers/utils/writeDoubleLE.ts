//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeDoubleLE: VariableTypeWriterFunc = (a: number, offset: number, buffer: Buffer) => {
    buffer.writeDoubleLE(a, offset);
    return VariableTypeLength[VariableType.DOUBLE_LE];
};
