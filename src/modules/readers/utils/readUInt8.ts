//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readUInt8: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    return { data: buffer.readUInt8(offset), nextByte: VariableTypeLength[VariableType.UINT_8] };
};
