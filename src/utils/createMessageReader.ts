//= Structures & Data
// Own
import { VariableType } from '../data/VariableType';
import { MessageReaderFunc } from '../data/MessageReaderFunc';
import { VariableTypeReaders } from '../data/VariableTypeReaders';

export function createMessageReader(variableTypes: VariableType[]): MessageReaderFunc {
    const variablesLength = variableTypes.length;

    return function (offset: number, buffer: Buffer) {
        let data: any[] = [];
        let nextByte: number = offset;

        for (let i = 0; i < variablesLength; ++i) {
            const result = VariableTypeReaders[variableTypes[i]](nextByte, buffer);
            console.log(i, nextByte, variableTypes[i], result);
            nextByte += result.nextByte;

            data.push(result.data);
        }

        return { data, nextByte };
    };
}
