//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readFloatLE: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    if (buffer.length < offset + VariableTypeLength[VariableType.FLOAT_LE]) return { needMore: true };
    return { data: buffer.readFloatLE(offset), nextByte: VariableTypeLength[VariableType.FLOAT_LE] };
};
