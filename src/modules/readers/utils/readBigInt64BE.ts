//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readBigInt64BE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    return { data: buffer.readBigInt64BE(offset), nextByte: VariableTypeLength[VariableType.BIG_INT_64_BE] };
};
