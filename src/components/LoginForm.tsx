import { HStack, VStack, Heading, Text, Box, Input, Button } from "@chakra-ui/react";
import { LoginFormProps } from "../types/LoginFormProps";

export const LoginForm: React.FC<LoginFormProps> = ({
  content,
  handlers,
  style = {},
  slots = {},
  layoutConfig = {},
  children,
}) => {
  const {
    logoPosition = "top",
    brandPosition = "belowLogo",
    direction = "column",
  } = layoutConfig;

  const finalContent = {
    heading: "Welcome Back",
    showHeading: true,
    ...content,
  };

  const renderLogoAndBrand = () => {
    const logo = slots.logo && <Box {...style.logoWrapper}>{slots.logo}</Box>;
    const brand = slots.brandName && <Box {...style.brandWrapper}>{slots.brandName}</Box>;

    switch (logoPosition) {
      case "left":
        return (
          <HStack justify="center" align="center" gap={2}>
            {logo}
            {brandPosition === "belowLogo" ? null : brand}
          </HStack>
        );
      case "right":
        return (
          <HStack justify="center" align="center" gap={2}>
            {brandPosition === "belowLogo" ? null : brand}
            {logo}
          </HStack>
        );
      case "bottom":
        return (
          <>
            {brandPosition !== "none" && brandPosition === "aboveHeading" && brand}
            {slots.aboveHeading}
            {finalContent.showHeading && finalContent.heading && (
              <Heading {...style.heading}>{finalContent.heading}</Heading>
            )}
            {slots.belowHeading}
            {logo}
            {brandPosition === "belowLogo" && brand}
          </>
        );
      case "top":
      default:
        return (
          <>
            {logo}
            {brandPosition === "belowLogo" && brand}
          </>
        );
    }
  };

  if (children) return <>{children}</>;

  const LayoutComponent = direction === "row" ? HStack : VStack;

  return (
    <LayoutComponent
      gap={4}
      align="stretch"
      justify="center"
      {...style.wrapper}
    >
      {renderLogoAndBrand()}
      {brandPosition === "aboveHeading" && slots.brandName}
      {slots.aboveHeading}
      {finalContent.showHeading && finalContent.heading && (
        <Heading {...style.heading}>{finalContent.heading}</Heading>
      )}
      {slots.belowHeading}

      {slots.description || (finalContent.description && (
        <Text textAlign="center" color="gray.600">
          {finalContent.description}
        </Text>
      ))}

      {slots.aboveForm}

      <Input
        type="email"
        value={finalContent.email}
        onChange={(e) => handlers?.onChange?.("email", e.target.value)}
        {...style.input?.email}
      />
      {slots.belowEmail}

      <Input
        type="password"
        value={finalContent.password}
        onChange={(e) => handlers?.onChange?.("password", e.target.value)}
        {...style.input?.password}
      />
      {slots.belowPassword}

      <Button onClick={handlers?.onSubmit} {...style.submitButton}>
        Login
      </Button>
      {slots.belowSubmit}

      {slots.footer}
    </LayoutComponent>
  );
};


