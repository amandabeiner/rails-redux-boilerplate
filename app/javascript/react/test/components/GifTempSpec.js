import GifsTemp from 'components/GifsTemp';

describe('GifsTemp', () => {

  beforeEach(() => {
    let pupper = {
      images: {
        fixed_height: {
          url: "iamapuppy.com"
        }
      }
    }

    wrapper = shallow(
      <GifsTemp
        puppy={pupper}
      />
    )
  })

  it('renders an image tag with the expected props', () => {
    expect(wrapper.find('img')).toBePresent();
    expect(wrapper.find('img')).toHaveProp('src', 'iamapuppy.com')
  })
})
