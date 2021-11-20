//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeInt16BE: VariableTypeWriterFunc = (a: number, offset: number, buffer: Buffer) => {
    buffer.writeInt16BE(a, offset);
    return VariableTypeLength[VariableType.INT_16_BE];
};
