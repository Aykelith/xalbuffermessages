//= Functions & Modules
// Own
import {
    writeBigInt64BE,
    writeBigInt64LE,
    writeInt16BE,
    writeInt16LE,
    writeInt32BE,
    writeInt32LE,
    writeInt8,
    writeBigUInt64BE,
    writeBigUInt64LE,
    writeUInt16BE,
    writeUInt16LE,
    writeUInt32BE,
    writeUInt32LE,
    writeUInt8,
    writeString,
    writeDoubleBE,
    writeDoubleLE,
    writeFloatBE,
    writeFloatLE,
    writeDate,
} from '../modules/writers';

//= Structures & Data
// Own
import { VariableType } from './VariableType';
import { VariableTypeWriterFunc } from './VariableTypeWriterFunc';

export const VariableTypeWrites: { [key: string]: VariableTypeWriterFunc } = {
    [VariableType.INT_8]: writeInt8,
    [VariableType.INT_16_BE]: writeInt16BE,
    [VariableType.INT_16_LE]: writeInt16LE,
    [VariableType.INT_32_BE]: writeInt32BE,
    [VariableType.INT_32_LE]: writeInt32LE,
    [VariableType.BIG_INT_64_BE]: writeBigInt64BE,
    [VariableType.BIG_INT_64_LE]: writeBigInt64LE,
    [VariableType.UINT_8]: writeUInt8,
    [VariableType.UINT_16_BE]: writeUInt16BE,
    [VariableType.UINT_16_LE]: writeUInt16LE,
    [VariableType.UINT_32_BE]: writeUInt32BE,
    [VariableType.UINT_32_LE]: writeUInt32LE,
    [VariableType.BIG_UINT_64_BE]: writeBigUInt64BE,
    [VariableType.BIG_UINT_64_LE]: writeBigUInt64LE,
    [VariableType.DOUBLE_BE]: writeDoubleBE,
    [VariableType.DOUBLE_LE]: writeDoubleLE,
    [VariableType.FLOAT_BE]: writeFloatBE,
    [VariableType.FLOAT_LE]: writeFloatLE,
    [VariableType.STRING]: writeString,
    [VariableType.DATE]: writeDate,
};
