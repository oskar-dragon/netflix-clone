import React, { useContext } from "react";
import { FeatureProvider, FeatureContext } from "../../context/FeatureContext";
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureClose,
  FeatureText,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from "./style/Card.styled";

export default function Card({ children, ...restProps }) {
  return (
    <FeatureProvider>
      <Container {...restProps}>{children}</Container>
    </FeatureProvider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { openFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        openFeature(item);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ src, ...restProps }) {
  return <Image {...restProps} src={src} />;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, closeFeature } = useContext(FeatureContext);

  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={closeFeature}>
          <img src={"/images/icons/close.png"} alt="close" />
        </FeatureClose>

        <Group margin="1.875em 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.SubTitle = function CardSubtitie({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps} children={children} />;
};
