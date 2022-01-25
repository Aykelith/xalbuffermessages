<p align="center">
    <img alt="XALBufferMessages logo" src="./XALBufferMessages.svg"/>    
</p>

<p align="center">
    <b>@softprovider/xalbuffermessages</b>
</p>

<p align="center">
    For creating writers/readers for buffer messages
</p>

## Intro

XALBufferMessages was created to offer a fast way to create functions that 
write/read from/to messages with a fixed number of variables. The creator of
writer and reader supports adding an offset for adding custom data to the 
buffer.

To create a writer and reader function for message composed of a signed, 
big-endian 32-bit integer and a string you can write:

```js
import { createMessageReader, createMessageWriter, VariableType } from '@softprovider/xalbuffermessages';

const MessageVariables = [ VariableType.INT_32_BE, VariableType.STRING ];

const writer = createMessageWriter(MessageVariables);
const reader = createMessageReader(MessageVariables);
```

And now that we have our writer and reader messages we just need to call them:

```js
const buffer = writer(0, 0, 32, "radom string"); // <= Buffer("")
const result = reader(0, 0, buffer); // <= { data: [32, "random string"], nextByte: 0 }
```

## Installing

## Documentation