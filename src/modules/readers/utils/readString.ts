//= Structures & Data
// Own
import { VariableTypeReaderFunc } from '../../../data/VariableTypeReaderFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const readString: VariableTypeReaderFunc = (offset: number, buffer: Buffer) => {
    let nextByte = offset;
    const valueLengthBytes = buffer.readUInt8(nextByte);
    nextByte += VariableTypeLength[VariableType.UINT_8];

    let length: number;
    if (valueLengthBytes == VariableTypeLength[VariableType.UINT_8]) length = buffer.readUInt8(nextByte);
    else if (valueLengthBytes == VariableTypeLength[VariableType.UINT_16_BE]) length = buffer.readUInt16BE(nextByte);
    else if (valueLengthBytes == VariableTypeLength[VariableType.UINT_32_BE]) length = buffer.readUInt32BE(nextByte);
    nextByte += valueLengthBytes;

    return { data: buffer.toString('utf8', nextByte, nextByte + length), nextByte: nextByte + length - offset };
};
