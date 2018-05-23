import BufferReader from 'buffer-reader'
import * as fs from 'fs'
import getDataTypeForCode from './data-types'
import Sauce from './sauce'

export default class SauceParser {
    private readonly sauceSize = 128
    private readonly commentSize = 64

    public parse(filePath: string): Sauce | null {
        this.validateFile(filePath)
        const fullFileSize = fs.statSync(filePath).size
        const fd = fs.openSync(filePath, 'r')
        const buffer = Buffer.alloc(fullFileSize)
        fs.readSync(fd, buffer, 0, fullFileSize, 0)
        const reader = new BufferReader(buffer)
        reader.seek(fullFileSize - this.sauceSize)
        const id = reader.nextString(5)
        if (id !== 'SAUCE') {
            return null
        }
        const version = reader.nextString(2)
        const title = reader.nextString(35).trim()
        const author = reader.nextString(20).trim()
        const group = reader.nextString(20).trim()
        const date = this.parseDate(reader.nextString(8))
        const fileSize = reader.nextUInt32LE()
        const dataType = getDataTypeForCode(reader.nextUInt8())
        const fileType = reader.nextUInt8()
        const tInfo1 = reader.nextUInt16LE()
        const tInfo2 = reader.nextUInt16LE()
        const tInfo3 = reader.nextUInt16LE()
        const tInfo4 = reader.nextUInt16LE()
        const commentLines = reader.nextUInt8()
        const flags = reader.nextUInt8()
        const tInfoS = reader.nextStringZero()
        const comments = commentLines > 0 ?
            this.parseComments(reader, fullFileSize, commentLines) : []
        return {
            id, version, title, group, author, date, fileSize, dataType,
            fileType, tInfo1, tInfo2, tInfo3, tInfo4, comments, flags, tInfoS
        }
    }

    private validateFile(filePath: string): void {
        if (!fs.existsSync(filePath)) {
            throw new Error(`File ${filePath} not found`)
        }
    }

    private parseDate(date: string): Date {
        const y = Number(date.substr(0, 4))
        const m = Number(date.substr(4, 2)) - 1
        const d = Number(date.substr(6, 2))
        return new Date(y, m, d)
    }

    private parseComments(reader: any, fullFileSize: number,
                          commentLines: number): Array<string> {
        reader.seek(fullFileSize - this.sauceSize - commentLines * this.commentSize - 5)
        const commentId = reader.nextString(5)
        const result: Array<string> = []
        if (commentId === 'COMNT') {
            for (let i = 0; i < commentLines; i++) {
                const line = reader.nextString(this.commentSize).trim()
                result.push(line)
            }
        }
        return result
    }
}
