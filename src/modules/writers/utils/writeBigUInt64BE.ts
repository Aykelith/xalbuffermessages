//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeBigUInt64BE: VariableTypeWriterFunc = (a: bigint, offset: number, buffer: Buffer) => {
    buffer.writeBigUInt64BE(a, offset);
    return VariableTypeLength[VariableType.BIG_UINT_64_BE];
};
