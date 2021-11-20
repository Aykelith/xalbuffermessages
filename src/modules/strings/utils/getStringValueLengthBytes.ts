//= Structures & Data
// Own
import { VariableType } from '../../../data/VariableType';

export function getStringValueLengthBytes(length: number): VariableType {
    let valueLengthBytes: VariableType;
    if (length < 256) valueLengthBytes = VariableType.UINT_8;
    else if (length < 65536) valueLengthBytes = VariableType.UINT_16_BE;
    else if (length < 4294967296) valueLengthBytes = VariableType.UINT_32_BE;

    return valueLengthBytes;
}
