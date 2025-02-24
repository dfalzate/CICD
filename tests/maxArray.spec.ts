import { maxArray } from '@services/service';

describe('maxArray', () => {
  describe('when the array is empty', () => {
    it('should return -Infinity', () => {
      expect(maxArray([])).toBe(0);
    });
    it('should return 0', () => {
      expect(maxArray([0])).toBe(0);
    });
    it('should return 1', () => {
      expect(maxArray([1])).toBe(1);
    });
    it('should return 1', () => {
      expect(maxArray([1, 0])).toBe(1);
    });
    it('should return 15', () => {
      expect(maxArray([1, -2, -3, 4, 5, 6])).toBe(15);
    });
  });
});
