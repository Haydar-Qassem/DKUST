import { Counter } from "../../Counter";
import Tag from "../../Tag";
import {
  ActionRow,
  BadgeItem,
  CardContainer,
  CardHeader,
  ContentBox,
  ImageBox,
  PriceAmount,
  PriceBlock,
  PriceMonth,
} from "./styles";

export const MinimalCard = ({ product }) => {
  return (
    <>
      <CardContainer className="container">
        {/* {product.badge && <BadgeItem>{product.badge}</BadgeItem>} */}
        <ImageBox>
          <img src="/assets/box-icon.png" alt={product.name} />
        </ImageBox>
        <ContentBox>
          <div>
            <Tag name={product.category} />

            <CardHeader>{product.name}</CardHeader>
          </div>
          <ActionRow>
            <PriceBlock>
              <PriceAmount>${product.price}</PriceAmount>
              <PriceMonth>/mo</PriceMonth>
            </PriceBlock>
          </ActionRow>
        </ContentBox>
      </CardContainer>{" "}
    </>
  );
};
