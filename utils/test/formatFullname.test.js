const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(100)).to.equal('Error');
        expect(formatFullname(0)).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });

    it('should return an error if "fullName" arg length is 0', () => {
        expect(formatFullname('')).to.equal('Error');
    });

    it('should return an error if "fullName" has only one word inside', () => {
        expect(formatFullname('Lorem')).to.equal('Error');
    });

    it('should return an error if "fullName" has more than two words inside', () => {
        expect(formatFullname('Lorem ipsum dolores')).to.equal('Error');
        expect(formatFullname('Lorem ipsum dolores nullam')).to.equal('Error');
    });

    it('should return good', () => {
        expect(formatFullname('zygmunt freud')).to.equal('Zygmunt Freud');
        expect(formatFullname('ZYGMUNT FREUD')).to.equal('Zygmunt Freud');
        expect(formatFullname('zYGMUNT fREUD')).to.equal('Zygmunt Freud');
    });
});