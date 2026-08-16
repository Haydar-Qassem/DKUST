import React from "react";
import CustomButton from "../../components/common/CustomButton";
import {
  CardContainer,
  ImageBox,
  ContentBox,
  BadgeItem,
  CardHeader,
  DescriptionText,
  PriceBlock,
  PriceAmount,
  PriceMonth,
  ActionRow,
  ActionButton,
} from "./styles";

const ProductCardGrid = ({ product, onAddToCart }) => {
  return (
    <CardContainer layout="grid">
      {product.badge && <BadgeItem>{product.badge}</BadgeItem>}
      <ImageBox layout="grid">
        <img src="/assets/box-icon.png" alt={product.name} />
      </ImageBox>
      <ContentBox>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "#888",
            fontSize: "0.85rem",
          }}
        >
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
          <span>{product.category}</span>
        </div>

        <CardHeader>
          <h3 style={{ margin: "0.5rem 0", color: "#1a1a1a" }}>
            {product.name}
          </h3>
        </CardHeader>

        <DescriptionText>{product.description}</DescriptionText>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ color: "#ffc107", fontSize: "1.2rem" }}>
            {"★".repeat(Math.round(product.rating))}
          </span>
          <span style={{ color: "#888", fontSize: "0.85rem" }}>
            ({product.reviewsCount})
          </span>
        </div>

        <ActionRow layout="grid">
          <PriceBlock>
            <PriceAmount>${product.price}</PriceAmount>
            <PriceMonth>/mo</PriceMonth>
          </PriceBlock>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <ActionButton variant="outline">Details</ActionButton>
            <ActionButton variant="solid" onClick={() => onAddToCart(product)}>
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Add
            </ActionButton>
          </div>
        </ActionRow>
      </ContentBox>
    </CardContainer>
  );
};

export default ProductCardGrid;
