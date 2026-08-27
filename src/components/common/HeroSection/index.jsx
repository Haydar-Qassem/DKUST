import { Banner, HeroSubtitle, HeroTitle } from "./styles";

const HeroSection = ({ title, subtitle, badge }) => {
  return (
    <Banner>
      <HeroTitle>{title}</HeroTitle>
      {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
      {badge && <span>{badge}</span>}
    </Banner>
  );
};

export default HeroSection;
