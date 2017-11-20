import {pxDivide} from './index';
import {expect} from 'chai';

describe('themes utils', () => {
  describe('pxDivide', () => {
    it('should divide by 1 by default', () => {
      expect(pxDivide('2px')).to.equal('2px');
    });

    it('should divide the number with the px remaining', () => {
      expect(pxDivide('2px', 2)).to.equal('1px');
      expect(pxDivide('12px', 2)).to.equal('6px');
    });
  });
});
