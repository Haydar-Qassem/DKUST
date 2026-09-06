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
import { useNavigate } from "react-router-dom";

const ProductCardList = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  return (
    <CardContainer layout="list">
      <ImageBox layout="list">
        <img src="/assets/box-icon.png" alt={product.name} />
      </ImageBox>
      <ContentBox layout="list">
        <CardHeader>
          <div>
            {product.badge && (
              <BadgeItem layout="list">{product.badge}</BadgeItem>
            )}
            <h3
              style={{
                margin: "0",
                fontSize: "var(--text-base)",
                lineHeight: "var(--leading-tight)",
                fontWeight: "600",
                color: "var(--color-gray-900)",
              }}
            >
              {product.name}
            </h3>
            <p
              style={{
                fontSize: "var(--text-xs)",
                lineHeight: "var(--text-xs--line-height)",
                color: "var(--color-gray-400)",
                marginTop: "calc(var(--spacing) * .5)",
                marginBottom: "0px",
              }}
            >
              {product.category}
            </p>
          </div>
          <PriceBlock>
            <PriceAmount layout="list">${product.price}</PriceAmount>
            <PriceMonth>/mo</PriceMonth>
          </PriceBlock>
        </CardHeader>

        <DescriptionText layout = "list">{product.description}</DescriptionText>

        <ActionRow layout="list">
          
          <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              color: "#ffc107",
              fontSize: "1rem",
              lineHeight: "16px",
            }}
          >
            {"★".repeat(Math.round(product.rating))}
          </span>
          <span
            style={{
              color: "var(--color-gray-500)",
              fontSize: "var(--text-xs)",
              lineHeight: "16px",
            }}
          >
            {product.rating} ({product.reviewsCount} reviews)
          </span>
        </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "calc(var(--spacing) * 2)",
            }}
          >
            <ActionButton
              variant="green-outline"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              View Details
            </ActionButton>
            <ActionButton
              variant="green"
              onClick={() => onAddToCart(product)}
            >
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
              Add to Cart
            </ActionButton>
          </div>
        </ActionRow>
      </ContentBox>
    </CardContainer>
  );
};

export default ProductCardList;
