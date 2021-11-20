//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeUInt16BE: VariableTypeWriterFunc = (a: number, offset: number, buffer: Buffer) => {
    buffer.writeUInt16BE(a, offset);
    return VariableTypeLength[VariableType.UINT_16_BE];
};
