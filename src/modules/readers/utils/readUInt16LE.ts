//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readUInt16LE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    return { data: buffer.readUInt16LE(offset), nextByte: VariableTypeLength[VariableType.UINT_16_LE] };
};
