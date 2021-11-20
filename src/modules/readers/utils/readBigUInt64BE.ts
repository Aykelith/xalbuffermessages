//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readBigUInt64BE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    return { data: buffer.readBigUInt64BE(offset), nextByte: VariableTypeLength[VariableType.BIG_UINT_64_BE] };
};
