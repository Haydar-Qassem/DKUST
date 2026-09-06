import { Banner, HeroSubtitle, HeroTitle } from "./styles";

const HeroSection = ({ title, subtitle, badge, height, background }) => {
  return (
    <Banner style={{ height: height, background: background }}>
      <HeroTitle>{title}</HeroTitle>
      {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
      {badge && <span>{badge}</span>}
    </Banner>
  );
};

export default HeroSection;
