import DataType from './data-type'

export default interface Sauce {
    readonly id: string
    readonly version: string
    readonly title: string
    readonly author: string
    readonly group: string
    readonly date: Date
    readonly fileSize: number
    readonly dataType: DataType
    readonly fileType: number
    readonly tInfo1: number
    readonly tInfo2: number
    readonly tInfo3: number
    readonly tInfo4: number
    readonly comments: Array<string>
    readonly flags: number
    readonly tInfoS: string
}
