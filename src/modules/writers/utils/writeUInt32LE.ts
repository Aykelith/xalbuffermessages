//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeUInt32LE: VariableTypeWriterFunc = (a: number, offset: number, buffer: Buffer) => {
    buffer.writeUInt32LE(a, offset);
    return VariableTypeLength[VariableType.UINT_32_LE];
};
