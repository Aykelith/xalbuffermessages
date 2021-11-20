//= Structures & Data
// Own
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';

export const writeBigInt64BE: VariableTypeWriterFunc = (a: bigint, offset: number, buffer: Buffer) => {
    buffer.writeBigInt64BE(a, offset);
    return VariableTypeLength[VariableType.BIG_INT_64_BE];
};
