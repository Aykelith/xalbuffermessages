//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readUInt32BE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    return { data: buffer.readUInt32BE(offset), nextByte: VariableTypeLength[VariableType.UINT_32_BE] };
};
