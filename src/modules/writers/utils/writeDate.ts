//= Structures & Data
// Own
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const writeDate: VariableTypeWriterFunc = (a: number, offset: number, buffer: Buffer) => {
    buffer.writeDoubleBE(a / 1000, offset);
    return VariableTypeLength[VariableType.DATE];
};
