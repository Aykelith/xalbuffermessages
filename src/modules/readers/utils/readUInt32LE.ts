//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readUInt32LE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    return { data: buffer.readUInt32LE(offset), nextByte: VariableTypeLength[VariableType.UINT_32_LE] };
};
