//= Functions & Modules
// Own
import { createMessageReader, createMessageWriter } from '../src';

//= Structures & Data
// Own
import { VariableType } from '../src';

describe('XALTCPMessages', () => {
    it('Create message writer and reader with all variables', () => {
        const Offset = 0;
        const OffsetBeforeArgIndex = 1;
        const Int8Value = 1;
        const Int16Value = 31000;
        const Int32Value = 1040034;
        const BigIntValue: bigint = BigInt(1);
        const DoubleValue = 136.123123123;
        const FloatValue = 1.123;
        const StringValue = 'STRING';
        const DateValue = Date.now();

        const VariableTypes = [
            VariableType.INT_8,
            VariableType.INT_16_BE,
            VariableType.INT_16_LE,
            VariableType.INT_32_BE,
            VariableType.INT_32_LE,
            VariableType.BIG_INT_64_BE,
            VariableType.BIG_INT_64_LE,
            VariableType.UINT_8,
            VariableType.UINT_16_BE,
            VariableType.UINT_16_LE,
            VariableType.UINT_32_BE,
            VariableType.UINT_32_LE,
            VariableType.BIG_UINT_64_BE,
            VariableType.BIG_UINT_64_LE,
            VariableType.DOUBLE_BE,
            VariableType.DOUBLE_LE,
            VariableType.FLOAT_BE,
            VariableType.FLOAT_LE,
            VariableType.STRING,
            VariableType.DATE,
        ];

        const writer = createMessageWriter(VariableTypes);
        const reader = createMessageReader(VariableTypes);

        const buffer = writer(
            Offset,
            OffsetBeforeArgIndex,
            Int8Value,
            Int16Value,
            Int16Value,
            Int32Value,
            Int32Value,
            BigIntValue,
            BigIntValue,
            Int8Value,
            Int16Value,
            Int16Value,
            Int32Value,
            Int32Value,
            BigIntValue,
            BigIntValue,
            DoubleValue,
            DoubleValue,
            FloatValue,
            FloatValue,
            StringValue,
            DateValue
        );

        console.log('buffer', buffer);

        expect(buffer).toBeInstanceOf(Buffer);

        const result = reader(Offset, OffsetBeforeArgIndex, buffer);
        const data = result.data;
        const nextByte = result.nextByte;

        expect(Array.isArray(data)).toEqual(true);
        expect(data.length).toEqual(VariableTypes.length);

        expect(data[0]).toEqual(Int8Value);
        expect(data[1]).toEqual(Int16Value);
        expect(data[2]).toEqual(Int16Value);
        expect(data[3]).toEqual(Int32Value);
        expect(data[4]).toEqual(Int32Value);
        expect(data[5]).toEqual(BigIntValue);
        expect(data[6]).toEqual(BigIntValue);
        expect(data[7]).toEqual(Int8Value);
        expect(data[8]).toEqual(Int16Value);
        expect(data[9]).toEqual(Int16Value);
        expect(data[10]).toEqual(Int32Value);
        expect(data[11]).toEqual(Int32Value);
        expect(data[12]).toEqual(BigIntValue);
        expect(data[13]).toEqual(BigIntValue);
        expect(data[14]).toEqual(DoubleValue);
        expect(data[15]).toEqual(DoubleValue);
        //expect(data[16]).toEqual(FloatValue);
        //expect(data[17]).toEqual(FloatValue);
        expect(data[18]).toEqual(StringValue);
        expect(data[19]).toEqual(DateValue);
    });
});
