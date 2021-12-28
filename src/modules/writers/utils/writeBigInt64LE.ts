//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeBigInt64LE: VariableTypeWriterFunc = (a: bigint, offset: number, buffer: Buffer) => {
    buffer.writeBigInt64LE(a, offset);
    return VariableTypeLength[VariableType.BIG_INT_64_LE];
};
