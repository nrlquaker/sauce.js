import DataType from './data-type'

const dataTypes: Array<DataType> = [
    { code: 0, name: 'None', description: 'Undefined filetype' },
    { code: 1, name: 'Character', description: 'A character based file' },
    { code: 2, name: 'Bitmap', description: 'Bitmap graphic and animation files' },
    { code: 3, name: 'Vector', description: 'A vector graphic file' },
    { code: 4, name: 'Audio', description: 'An audio file' },
    {
        code: 5,
        name: 'BinaryText',
        description: 'This is a raw memory copy of a text mode screen'
    },
    { code: 6, name: 'XBin', description: 'An XBin or eXtended BIN file' },
    { code: 7, name: 'Archive', description: 'An archive file' },
    { code: 8, name: 'Executable', description: 'A executable file' }
]

export default function getDataTypeForCode(code: number): DataType {
    return dataTypes[code]
}
