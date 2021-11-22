import { CardContainer, CardImage, CardBody, CardPrice, CardProductName} from './styles/Card';

import Button from './Button';
import { FlexContainer } from './styles/FlexContainer';

const Card = (props) => {
  return (
      <CardContainer width="500px">
        <CardImage src={props.src} />
        <CardBody>
          <CardPrice>{props.price}</CardPrice>
          <CardProductName>{props.productname}</CardProductName>
          <Button/>
        </CardBody>
      </CardContainer>
  );
}
export default Card;
