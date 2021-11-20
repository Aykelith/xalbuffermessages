//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readFloatBE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    return { data: buffer.readFloatBE(offset), nextByte: VariableTypeLength[VariableType.FLOAT_BE] };
};
