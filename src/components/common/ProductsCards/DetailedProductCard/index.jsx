import { Counter } from "../../Counter";
import Tag from "../../Tag";
import {
  ActionButton,
  ActionRow,
  BadgeItem,
  CardContainer,
  CardHeader,
  ContentBox,
  DescriptionText,
  FeaturesList,
  ImageBox,
  PriceAmount,
  PriceBlock,
  PriceMonth,
} from "./styles";

export const DetailedProductCard = ({ product }) => {
  return (
    <>
      <CardContainer className="container">
        <ImageBox>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img src="/assets/box-icon.png" alt={product.name} />
            {product.badge && <BadgeItem>{product.badge}</BadgeItem>}
          </div>
        </ImageBox>
        <ContentBox className="d-flex flex-column justify-content-between">
          <div>
            <Tag name={product.category} variant="boxedTag" />

            <CardHeader>{product.name}</CardHeader>

            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span style={{ color: "#ffc107", fontSize: "1.2rem" }}>
                {"★".repeat(Math.round(product.rating))}
              </span>
              <span style={{ color: "#888", fontSize: "0.85rem" }}>
                {Math.round(product.rating)} out of 5
              </span>
              <span style={{ color: "#888", fontSize: "0.85rem" }}>
                {product.reviewsCount} reviews
              </span>
            </div>

            <DescriptionText>{product.description}</DescriptionText>
            <FeaturesList>
              {product?.features?.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "8px",
                    gap: "calc(var(--spacing) * 2)",
                  }}
                >
                  {feature}
                </li>
              ))}
            </FeaturesList>
          </div>
          <ActionRow className="d-flex flex-column row justify-content-start">
            <PriceBlock>
              <PriceAmount>${product.price}</PriceAmount>
              <PriceMonth>/month</PriceMonth>
            </PriceBlock>

            <Counter min="1" />
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <ActionButton
                variant="green"
                onClick={() => {
                  console.log("add to cart");
                }}
                style={{ flex: 4 }}
              >
                <svg
                  width="60"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Add to Cart
              </ActionButton>
              <ActionButton
                onClick={() => {
                  console.log("buy now");
                }}
                variant="green-outline"
                style={{ flex: 1 }}
              >
                Buy Now
              </ActionButton>
            </div>
          </ActionRow>
        </ContentBox>
      </CardContainer>{" "}
    </>
  );
};
