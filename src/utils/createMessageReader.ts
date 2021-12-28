//= Structures & Data
// Own
import { VariableType } from '../data/VariableType';
import { MessageReaderFunc } from '../data/MessageReaderFunc';
import { VariableTypeReaders } from '../data/VariableTypeReaders';
import {
    VariableTypeReaderFunc_NeedMoreReturn as NeedMoreReturn,
    VariableTypeReaderFunc_NormalReturn as NormalReturn,
} from '../data/VariableTypeReaderFunc';

export function createMessageReader(variableTypes: VariableType[]): MessageReaderFunc {
    const variablesLength = variableTypes.length;

    return function (offset: number, offsetBeforeArgIndex: number, buffer: Buffer) {
        let data: any[] = [];
        let nextByte: number = offsetBeforeArgIndex == 0 ? offset : 0;

        for (let i = 0; i < variablesLength; ++i) {
            const result = VariableTypeReaders[variableTypes[i]](nextByte, buffer);
            if ((<NeedMoreReturn>result).needMore) return { needMore: true };

            nextByte += (<NormalReturn>result).nextByte;
            if (offsetBeforeArgIndex == i + 1) {
                nextByte += offset;
            }

            data.push((<NormalReturn>result).data);
        }

        return { data, nextByte };
    };
}
