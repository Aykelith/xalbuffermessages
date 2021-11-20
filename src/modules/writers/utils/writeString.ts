//= Structures & Data
// Own
import { getStringValueLengthBytes } from '../../strings/utils/getStringValueLengthBytes';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';
import { VariableTypeWriterFunc } from '../../../data/VariableTypeWriterFunc';

export const writeString: VariableTypeWriterFunc = (a: string, offset: number, buffer: Buffer) => {
    const length = a.length;

    let variableTypeOfLength = getStringValueLengthBytes(length);
    const valueLengthBytes = VariableTypeLength[variableTypeOfLength] as number;

    let nextByte = offset;
    buffer.writeUInt8(valueLengthBytes, nextByte);
    nextByte += VariableTypeLength[VariableType.UINT_8];

    if (variableTypeOfLength == VariableType.UINT_8) buffer.writeUInt8(length, nextByte);
    else if (variableTypeOfLength == VariableType.UINT_16_BE) buffer.writeUInt16BE(length, nextByte);
    else if (variableTypeOfLength == VariableType.UINT_32_BE) buffer.writeUInt32BE(length, nextByte);
    nextByte += valueLengthBytes;

    buffer.write(a, nextByte, length, 'utf8');

    return VariableTypeLength[VariableType.UINT_8] + valueLengthBytes + length;
};
