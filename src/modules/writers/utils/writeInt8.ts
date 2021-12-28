//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeInt8: VariableTypeWriterFunc = (a: number, offset: number, buffer: Buffer) => {
    buffer.writeInt8(a, offset);
    return VariableTypeLength[VariableType.INT_8];
};
