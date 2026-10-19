import { useNavigate, useParams } from "react-router-dom";
import { FilterBar } from "../../components/common/FilterBar";
import { DetailedProductCard } from "../../components/common/ProductsCards/DetailedProductCard";
import { useState } from "react";
import { MinimalCard } from "../../components/common/ProductsCards/MinimalCard";
import { RelatedProductsSection } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

const productsArray = [
  {
    id: 1,
    name: "AI Analytics Dashboard",
    category: "Software",
    description:
      "Real-time analytics powered by machine learning. Monitor KPIs, detect anomalies, and get predictive insights from your data with an intuitive drag-and-drop interface.",
    features: [
      "6-DOF movement",
      "0.1mm precision",
      "Load capacity: 5kg",
      "ROS compatible",
      "Safety sensors built-in",
    ],
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
    features: [
      "6-DOF movement",
      "0.1mm precision",
      "Load capacity: 5kg",
      "ROS compatible",
      "Safety sensors built-in",
    ],
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
    features: [
      "6-DOF movement",
      "0.1mm precision",
      "Load capacity: 5kg",
      "ROS compatible",
      "Safety sensors built-in",
    ],
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
    features: [
      "6-DOF movement",
      "0.1mm precision",
      "Load capacity: 5kg",
      "ROS compatible",
      "Safety sensors built-in",
    ],
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
    features: [
      "6-DOF movement",
      "0.1mm precision",
      "Load capacity: 5kg",
      "ROS compatible",
      "Safety sensors built-in",
    ],
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
    features: [
      "6-DOF movement",
      "0.1mm precision",
      "Load capacity: 5kg",
      "ROS compatible",
      "Safety sensors built-in",
    ],
    price: 79,
    rating: 4.9,
    reviewsCount: 305,
    badge: "Top Rated",
  },
];

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = productsArray.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const relatedProducts = productsArray
    .filter((p) => p.id !== parseInt(id))
    .slice(0, 3);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const addToCart = () => {
    const finalProduct = { ...product, quantity };
    console.log("Added to cart:", finalProduct);
  };

  const buyNow = () => {
    const finalProduct = { ...product, quantity };
    console.log("Buy Now executed:", finalProduct);
  };

  return (
    <>
      <FilterBar style={{ backgroundColor: "var(--color-white)" }}>
        <div
          className="container"
          style={{
            color: "var(--color-gray-700)",
            fontSize: "var(--text-xs)",
            lineHeight: "var(--text-xs--line-height)",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          <span style={{ color: `var(--color-gray-400)` }}>
            <span
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Home{" "}
            </span>
            /
            <span
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              {" "}
              Products{" "}
            </span>
            /{" "}
          </span>
          {product.name}
        </div>
      </FilterBar>
      <div style={{ backgroundColor: `var(--color-gray-50)`, margin: `0` }}>
        <div className="container pt-5" onClick={() => navigate(`/products`)}>
          <span
            style={{
              color: `var(--color-gray-500)`,
              cursor: `pointer`,
              fontSize: "var(--text-sm)",
              lineHeight: "var(--text-sm--line-height)",
              fontWeight: "var(--font-weight-medium)",
            }}
            onClick={() => {
              console.log("return to the product page");
            }}
          >
            <FiArrowLeft /> Back to Products
          </span>
        </div>
        <DetailedProductCard product={product} />
        <RelatedProductsSection className="container">
          <h5>Related Products</h5>
          <div className="d-flex gap-3">
            <MinimalCard product={relatedProducts[0]} />
            <MinimalCard product={relatedProducts[1]} />
            <MinimalCard product={relatedProducts[2]} />
          </div>
        </RelatedProductsSection>
      </div>
    </>
  );
};
