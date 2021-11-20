//= Functions & Modules
// Own
import {
    readBigInt64BE,
    readBigInt64LE,
    readInt16BE,
    readInt16LE,
    readInt32BE,
    readInt32LE,
    readInt8,
    readBigUInt64BE,
    readBigUInt64LE,
    readUInt16BE,
    readUInt16LE,
    readUInt32BE,
    readUInt32LE,
    readUInt8,
    readString,
    readDoubleBE,
    readDoubleLE,
    readFloatBE,
    readFloatLE,
    readDate,
} from '../modules/readers';

//= Structures & Data
// Own
import { VariableType } from './VariableType';
import { VariableTypeReaderFunc } from './VariableTypeReaderFunc';

export const VariableTypeReaders: { [key: string]: VariableTypeReaderFunc } = {
    [VariableType.INT_8]: readInt8,
    [VariableType.INT_16_BE]: readInt16BE,
    [VariableType.INT_16_LE]: readInt16LE,
    [VariableType.INT_32_BE]: readInt32BE,
    [VariableType.INT_32_LE]: readInt32LE,
    [VariableType.BIG_INT_64_BE]: readBigInt64BE,
    [VariableType.BIG_INT_64_LE]: readBigInt64LE,
    [VariableType.UINT_8]: readUInt8,
    [VariableType.UINT_16_BE]: readUInt16BE,
    [VariableType.UINT_16_LE]: readUInt16LE,
    [VariableType.UINT_32_BE]: readUInt32BE,
    [VariableType.UINT_32_LE]: readUInt32LE,
    [VariableType.BIG_UINT_64_BE]: readBigUInt64BE,
    [VariableType.BIG_UINT_64_LE]: readBigUInt64LE,
    [VariableType.DOUBLE_BE]: readDoubleBE,
    [VariableType.DOUBLE_LE]: readDoubleLE,
    [VariableType.FLOAT_BE]: readFloatBE,
    [VariableType.FLOAT_LE]: readFloatLE,
    [VariableType.STRING]: readString,
    [VariableType.DATE]: readDate,
};
