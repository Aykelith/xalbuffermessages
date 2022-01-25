//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeInt32LE: VariableTypeWriterFunc = (a: number, offset: number, buffer: Buffer) => {
    buffer.writeInt32LE(a, offset);
    return VariableTypeLength[VariableType.INT_32_LE];
};
