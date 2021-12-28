//= Functions & Modules
// Own
import { getStringValueLengthBytes } from '../../strings';

//= Structures & Data
// Own
import { VariableLengthCalculatorFunc } from '../../../data/VariableLengthCalculatorFunc';
import { VariableType } from '../../../data/VariableType';
import { VariableTypeLength } from '../../../data/VariableTypeLength';

export const calculateStringLength: VariableLengthCalculatorFunc = (a: string) => {
    const length = a.length;
    const valueLengthBytes = getStringValueLengthBytes(length);

    return VariableTypeLength[VariableType.UINT_8] + <number>VariableTypeLength[valueLengthBytes] + length;
};
