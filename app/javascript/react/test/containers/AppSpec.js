import GifsTemp from 'components/GifsTemp';

describe('App', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      return(createResponseFromFixture('puppies'))
    })

    wrapper = mountReactAppAt('/')

  })

  it('renders GifTemp components', done => {
    setTimeout(() => {
      expect(wrapper.find(GifsTemp)).toBePresent()
      done();
    }, 0);
  });
});
