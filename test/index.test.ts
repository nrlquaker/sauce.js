import { expect } from 'chai'
import { SauceParser } from '../lib/index'

describe('SAUCE parsing:', () => {
    it('File not found', () => {
        const sp = new SauceParser()
        const fileName = '/no/such/file'
        const func = () => sp.parse(fileName)
        expect(func).to.throw(`File ${fileName} not found`)
    })
    it('File without SAUCE', () => {
        const sp = new SauceParser()
        const result = sp.parse(__dirname + '/files/FILE_ID.DIZ')
        // tslint:disable-next-line:no-unused-expression
        expect(result).to.be.null
    })
    it('File with filesize less than SAUCE size', () => {
        const sp = new SauceParser()
        const result = sp.parse(__dirname + '/files/FILE_ID_2.DIZ')
        // tslint:disable-next-line:no-unused-expression
        expect(result).to.be.null
    })
    it('File with comments', () => {
        const sp = new SauceParser()
        const result = sp.parse(__dirname + '/files/us-crypt.ans')
        // tslint:disable-next-line:no-unused-expression
        expect(result).to.be.not.null
        expect(result!.id).to.equal('SAUCE')
        expect(result!.version).to.equal('00')
        expect(result!.title).to.equal('the crypt')
        expect(result!.author).to.equal('the knight')
        expect(result!.group).to.equal('fuel')
        expect(result!.comments.length).to.equal(1)
        expect(result!.comments[0]).to.equal('pic by The Knight - font by Nail')
        expect(result!.dataType.code).to.equal(1)
        expect(result!.dataType.name).to.equal('Character')
        expect(result!.dataType.description).to.equal('A character based file')
        expect(result!.date.getDate()).to.equal(31)
        expect(result!.date.getMonth()).to.equal(6)
        expect(result!.date.getFullYear()).to.equal(2017)
        expect(result!.fileSize).to.equal(14284)
        expect(result!.fileType).to.equal(1)
        expect(result!.flags).to.equal(18)
        expect(result!.tInfo1).to.equal(80)
        expect(result!.tInfo2).to.equal(55)
        expect(result!.tInfo3).to.equal(0)
        expect(result!.tInfo4).to.equal(0)
        expect(result!.tInfoS).to.equal('IBM VGA')
    })
    it('File without comments', () => {
        const sp = new SauceParser()
        const result = sp.parse(__dirname + '/files/ACIDVIEW.NFO')
        // tslint:disable-next-line:no-unused-expression
        expect(result).to.be.not.null
        expect(result!.id).to.equal('SAUCE')
        expect(result!.version).to.equal('00')
        expect(result!.title).to.equal('ACiD View Documentation')
        expect(result!.author).to.equal('RaD Man')
        expect(result!.group).to.equal('ACiD Productions')
        expect(result!.comments.length).to.equal(0)
        expect(result!.dataType.code).to.equal(1)
        expect(result!.dataType.name).to.equal('Character')
        expect(result!.dataType.description).to.equal('A character based file')
        expect(result!.date.getDate()).to.equal(1)
        expect(result!.date.getMonth()).to.equal(6)
        expect(result!.date.getFullYear()).to.equal(1996)
        expect(result!.fileSize).to.equal(51349)
        expect(result!.fileType).to.equal(1)
        expect(result!.flags).to.equal(0)
        expect(result!.tInfo1).to.equal(80)
        expect(result!.tInfo2).to.equal(1271)
        expect(result!.tInfo3).to.equal(0)
        expect(result!.tInfo4).to.equal(0)
        expect(result!.tInfoS).to.equal('')
    })
})
