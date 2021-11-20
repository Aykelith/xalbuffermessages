//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeUInt8: VariableTypeWriterFunc = (a: number, offset: number, buffer: Buffer) => {
    buffer.writeUInt8(a, offset);
    return VariableTypeLength[VariableType.UINT_8];
};
