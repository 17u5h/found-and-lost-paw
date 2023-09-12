import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first arg', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional args', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods true', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('with some mod false', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('with some mod undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      ['class1', 'class2'],
    )).toBe(expected);
  });
});