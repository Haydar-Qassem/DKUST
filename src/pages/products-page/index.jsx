/*
  ProductsPage — W09 React Products / Toggle View starter.

  Live demo: https://fully-pry-56628385.figma.site/

  This file is the only page. Use the comments below as the task spec,
  and use productsArray as the demo data. Do not invent different products.
  If badge is null (ML Training Suite), do not render a badge.

  ----------------------------------------
  Task 1 — Build the Products page
  ----------------------------------------
  Page sections:
  - Header + Footer matching the rest of the project / demo
  - Title block: "Our Products"
  - Category bar + Grid / List toggle
  - Results counter
  - Product list

  Create the pieces below, then call them from this page in the right order:
  - A styles file for this page, using styled-components
  - ProductCardGrid — and a styles file next to it
  - ProductCardList — and a styles file next to it

  Create TWO separate card components. Each receives (product, onAddToCart):
  - ProductCardGrid — image on top, content below (3 cards per row)
  - ProductCardList — full-width card, content beside the image

  Do not copy the card markup 6 times. Use the matching component with
  map() on productsArray. Reuse the existing CustomButton for Details
  and Add to Cart in BOTH components.

  addToCart(product) must console.log() the full product object.

  ----------------------------------------
  Task 2 — Filter + Grid / List
  ----------------------------------------
  States (useState only — do not use document.getElementById):
  - viewMode, setViewMode — starts as "grid"
  - selectedCategory, setSelectedCategory — starts as "All"

  Categories: All, Software, AI, Hardware, Robotics, Security
  - On click, update selectedCategory. Active button uses the highlight
    from the demo.
  - filter() the products, then map() to render them. "All" shows every product.
  - Counter: "2 products found"
  - Empty list: "No products found"

  Grid / List toggle:
  - Two icon buttons at the end of the filter bar, beside Sort
  - Grid icon → viewMode = "grid"
  - List icon → viewMode = "list"
  - Active button has a green background, as in the demo
  - Inside map(), render ProductCardGrid when viewMode is "grid",
    and ProductCardList when viewMode is "list"

  Reuse ProductCardGrid, ProductCardList, and CustomButton. Do not
  duplicate their code.

  Submit: delete node_modules, zip the project, put your name on the zip,
  email it with subject: Week09 Task
*/

import { useState } from "react";
import {
  Banner,
  CategoryButton,
  CategoryList,
  FilterBar,
  GridWrapper,
  IconButton,
  ListWrapper,
  PageWrapper,
  ResultsText,
  ViewOptions,
  ToggleBtn,
  ToggleContainer,
  ViewControls,
  SortDropdownWrapper,
  SortContainer,
  SortButton,
  DropdownMenu,
  DropdownItem,
} from "./styles";
import ProductCardGrid from "./ProductCardGrid";
import ProductCardList from "./ProductCardList";

const productsArray = [
  {
    id: 1,
    name: "AI Analytics Dashboard",
    category: "Software",
    description:
      "Real-time analytics powered by machine learning. Monitor KPIs, detect anomalies, and get predictive insights from your data with an intuitive drag-and-drop interface.",
    price: 299,
    rating: 4.8,
    reviewsCount: 124,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "RoboArm Pro X1",
    category: "Robotics",
    description:
      "Industrial-grade robotic arm with 6 degrees of freedom. Precision control with sub-millimeter accuracy, perfect for assembly lines and research labs.",
    price: 4999,
    rating: 4.6,
    reviewsCount: 38,
    badge: "New",
  },
  {
    id: 3,
    name: "DataSync Cloud",
    category: "Software",
    description:
      "Seamlessly sync and manage your data across cloud providers. Supports AWS, Azure, and GCP with end-to-end encryption and real-time conflict resolution.",
    price: 49,
    rating: 4.5,
    reviewsCount: 210,
    badge: "Popular",
  },
  {
    id: 4,
    name: "ML Training Suite",
    category: "AI",
    description:
      "End-to-end machine learning pipeline tool. From data preprocessing to model deployment, everything in one unified workspace built for teams.",
    price: 199,
    rating: 4.7,
    reviewsCount: 89,
    badge: null,
  },
  {
    id: 5,
    name: "SmartSensor Kit",
    category: "Hardware",
    description:
      "IoT sensor kit with 12 sensors including temperature, humidity, pressure, and motion. Pre-configured for instant plug-and-play integration.",
    price: 149,
    rating: 4.3,
    reviewsCount: 56,
    badge: "Sale",
  },
  {
    id: 6,
    name: "CyberShield VPN",
    category: "Security",
    description:
      "Enterprise-grade VPN solution with zero-log policy. Military-grade AES-256 encryption, kill switch, and split tunneling for maximum security.",
    price: 79,
    rating: 4.9,
    reviewsCount: 305,
    badge: "Top Rated",
  },
];

const categories = [
  "All",
  "Software",
  "AI",
  "Hardware",
  "Robotics",
  "Security",
];

const sortOptions = [
  { label: "Sort: Default", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Top Rated", value: "rating-desc" },
];

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  let processedProducts =
    selectedCategory === "All"
      ? [...productsArray]
      : productsArray.filter(
          (product) => product.category === selectedCategory,
        );

  if (sortBy === "price-asc") {
    processedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    processedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating-desc") {
    processedProducts.sort((a, b) => b.rating - a.rating);
  }

  const addToCart = (product) => {
    console.log(product);
  };

  const currentSortLabel = sortOptions.find(
    (opt) => opt.value === sortBy,
  )?.label;

  return (
    <PageWrapper>
      <Banner>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Our Products
        </h1>
        <p style={{ color: "#aaa", maxWidth: "600px", margin: "0 auto" }}>
          Explore our range of software, AI tools, hardware kits, and robotics
          solutions built for modern teams.
        </p>
      </Banner>

      <FilterBar>
        <CategoryList>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryList>

        <ViewControls>
          <SortContainer onMouseLeave={() => setIsSortOpen(false)}>
            <SortButton
              isOpen={isSortOpen}
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              {currentSortLabel}
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                style={{
                  transform: isSortOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </SortButton>

            {isSortOpen && (
              <DropdownMenu>
                {sortOptions.map((option) => (
                  <DropdownItem
                    key={option.value}
                    active={sortBy === option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setIsSortOpen(false);
                    }}
                  >
                    {option.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </SortContainer>

          <ToggleContainer>
            <ToggleBtn
              active={viewMode === "grid"}
              onClick={() => setViewMode("grid")}
            >
              grid
            </ToggleBtn>
            <ToggleBtn
              active={viewMode === "list"}
              onClick={() => setViewMode("list")}
            >
              list
            </ToggleBtn>
          </ToggleContainer>
        </ViewControls>
      </FilterBar>

      <ResultsText>
        {processedProducts.length === 0
          ? "No products found."
          : `${processedProducts.length} products found`}
      </ResultsText>

      {viewMode === "grid" ? (
        <GridWrapper>
          {processedProducts.map((product) => (
            <ProductCardGrid
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </GridWrapper>
      ) : (
        <ListWrapper>
          {processedProducts.map((product) => (
            <ProductCardList
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </ListWrapper>
      )}
    </PageWrapper>
  );
};

export default ProductsPage;
