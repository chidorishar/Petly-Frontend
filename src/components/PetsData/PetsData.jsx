import { PetsContainer, PetsTitle, PetsItem } from './PetsData.styled';
export const PetsData = () => {
  return (
    <PetsContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <PetsTitle>My pets:</PetsTitle>
        <button
          type="button"
          style={{
            display: 'inline-block',
            height: '20px',
            borderRadius: 4,
            backgroundColor: '#F59256',
            color: 'black',
          }}
        >
          Add pet
        </button>
      </div>
      <div>
        <ul>
          <PetsItem>
            <div
              style={{
                width: '161px',
                height: '161px',
                borderRadius: '40px',
                overflow: 'hidden',
                marginRight: 32,
                display: 'flex',
              }}
            >
              <img
                src="https://images.prom.ua/901671004_w640_h640_lev-iz-dereva.jpg"
                alt="Pet Photo"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ width: '100%' }}>
              <ul>
                <li>
                  <span>Name: </span>Jack
                </li>
                <li>
                  <span>Date of birth: </span>22.04.2018
                </li>
                <li>
                  <span>Breed: </span>Persian cat
                </li>
                <li>
                  <span>Comments: </span>Lorem ipsum dolor sit amet,
                  consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum
                  dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                  consectetur
                </li>
              </ul>
            </div>
          </PetsItem>
          <PetsItem>
            <div
              style={{
                width: '161px',
                height: '161px',
                borderRadius: '40px',
                overflow: 'hidden',
                marginRight: 32,
              }}
            >
              <img
                src="https://images.prom.ua/901671004_w640_h640_lev-iz-dereva.jpg"
                alt="Pet Photo"
              />
            </div>
            <div>
              <ul>
                <li>
                  <span>Name: </span>Jack
                </li>
                <li>
                  <span>Date of birth: </span>22.04.2018
                </li>
                <li>
                  <span>Breed: </span>Basenji
                </li>
                <li>
                  <span>Comments: </span>Lorem ipsum dolor sit amet,
                  consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum
                  dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                  consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum
                  dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                  consectetur Lorem ipsum dolor sit amet, consectetur Lorem
                  ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                  consectetur ipsum dolor sit amet, rem ipsum dolor sit amet,
                  ipsum sit,
                </li>
              </ul>
            </div>
          </PetsItem>
        </ul>
      </div>
    </PetsContainer>
  );
};
