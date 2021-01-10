import { BdPipe } from './bd.pipe';

describe('BdPipe', () => {
  it('create an instance', () => {
    const pipe = new BdPipe();
    expect(pipe).toBeTruthy();
  });
});
