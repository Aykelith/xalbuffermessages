//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeFloatBE: VariableTypeWriterFunc = (a: number, offset: number, buffer: Buffer) => {
    buffer.writeFloatBE(a, offset);
    return VariableTypeLength[VariableType.FLOAT_BE];
};
