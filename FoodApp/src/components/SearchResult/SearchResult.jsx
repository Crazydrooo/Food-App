import styled from "styled-components";
import { BASE_URL, Button, MainContainer } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <MainContainer>
        <FoodCards>
          {data?.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food_image">
                <img className="images" src={BASE_URL + image} alt="img" />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </MainContainer>
    </FoodCardContainer>
  );
};
export default SearchResult;

const FoodCardContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url("/images/bg.png");
  background-size: cover;
`;

const FoodCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 32px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  .images {
    max-width: 153px;
    max-height: 153px;
    /* border-radius: 50%; */
    clip-path: circle(50%);
  }
`;

const FoodCard = styled.div`
  border-radius: 20px;

  display: flex;
  border: 0.66px solid;
  width: 360px;
  height: 180px;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    Button {
      font-size: 12px;
    }
  }
`;
