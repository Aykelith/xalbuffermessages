//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeBigUInt64LE: VariableTypeWriterFunc = (a: bigint, offset: number, buffer: Buffer) => {
    buffer.writeBigUInt64LE(a, offset);
    return VariableTypeLength[VariableType.BIG_UINT_64_LE];
};
