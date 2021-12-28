//= Structures & Data
// Own
import { VariableType } from '../data/VariableType';
import { MessageWriterFunc } from '../data/MessageWriterFunc';
import { VariableTypeWrites } from '../data/VariableTypeWriters';
import { VariableTypeLength } from '../data/VariableTypeLength';

export function createMessageWriter(variableTypes: VariableType[]): MessageWriterFunc {
    const variablesLength = variableTypes.length;
    let bufferSize: number = 0;
    let postBufferSizeCalculators: ((...args: any[]) => number)[] = [];

    for (let i = 0; i < variablesLength; ++i) {
        if (variableTypes[i] == VariableType.STRING) {
            const index = i;
            postBufferSizeCalculators.push((args: any[]) => VariableTypeLength[VariableType.STRING](args[index]));
            continue;
        }

        bufferSize += VariableTypeLength[variableTypes[i]] as number;
    }

    if (postBufferSizeCalculators.length == 0) postBufferSizeCalculators = null;

    return function (offset: number, offsetBeforeArgIndex: number, ...args: any[]): Buffer {
        let buffer: Buffer;
        let additionalSize: number = offset;
        if (postBufferSizeCalculators) {
            for (let i = 0, length = postBufferSizeCalculators.length; i < length; ++i) {
                additionalSize += postBufferSizeCalculators[i](args);
            }
        }

        buffer = Buffer.allocUnsafe(bufferSize + additionalSize);

        let nextByte: number = offsetBeforeArgIndex == 0 ? offset : 0;
        for (let i = 0; i < variablesLength; ++i) {
            nextByte += VariableTypeWrites[variableTypes[i]](args[i], nextByte, buffer);
            if (offset && offsetBeforeArgIndex == i + 1) {
                nextByte += offset;
            }
        }

        return buffer;
    };
}
