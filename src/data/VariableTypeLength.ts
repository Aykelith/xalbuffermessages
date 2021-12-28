//= Functions & Modules
// Own
import { calculateStringLength } from '../modules/length_calculators';

//= Structures & Data
// Own
import { VariableType } from './VariableType';

export const VariableTypeLength = {
    [VariableType.INT_8]: 1,
    [VariableType.INT_16_BE]: 2,
    [VariableType.INT_16_LE]: 2,
    [VariableType.INT_32_BE]: 4,
    [VariableType.INT_32_LE]: 4,
    [VariableType.BIG_INT_64_BE]: 8,
    [VariableType.BIG_INT_64_LE]: 8,
    [VariableType.UINT_8]: 1,
    [VariableType.UINT_16_BE]: 2,
    [VariableType.UINT_16_LE]: 2,
    [VariableType.UINT_32_BE]: 4,
    [VariableType.UINT_32_LE]: 4,
    [VariableType.BIG_UINT_64_BE]: 8,
    [VariableType.BIG_UINT_64_LE]: 8,
    [VariableType.DOUBLE_BE]: 8,
    [VariableType.DOUBLE_LE]: 8,
    [VariableType.FLOAT_BE]: 4,
    [VariableType.FLOAT_LE]: 4,
    [VariableType.STRING]: calculateStringLength,
    [VariableType.DATE]: 8,
};
