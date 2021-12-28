//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readBigUInt64LE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    if (buffer.length < offset + VariableTypeLength[VariableType.BIG_UINT_64_LE]) return { needMore: true };
    return { data: buffer.readBigUInt64LE(offset), nextByte: VariableTypeLength[VariableType.BIG_UINT_64_LE] };
};
