//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeUInt16LE: VariableTypeWriterFunc = (a: number, offset: number, buffer: Buffer) => {
    buffer.writeUInt16LE(a, offset);
    return VariableTypeLength[VariableType.UINT_16_LE];
};
