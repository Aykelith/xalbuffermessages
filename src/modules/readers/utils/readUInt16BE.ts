//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readUInt16BE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    if (buffer.length < offset + VariableTypeLength[VariableType.UINT_16_BE]) return { needMore: true };
    return { data: buffer.readUInt16BE(offset), nextByte: VariableTypeLength[VariableType.UINT_16_BE] };
};
