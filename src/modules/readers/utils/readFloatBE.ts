//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readFloatBE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    if (buffer.length < offset + VariableTypeLength[VariableType.FLOAT_BE]) return { needMore: true };
    return { data: buffer.readFloatBE(offset), nextByte: VariableTypeLength[VariableType.FLOAT_BE] };
};
