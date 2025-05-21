import type { StackProps, BoxProps, Input, Button } from "@chakra-ui/react";

import type { ReactNode } from "react";
export type LayoutConfig = {
    logoPosition?: "top" | "bottom" | "left" | "right";
    brandPosition?: "aboveHeading" | "belowHeading" | "belowLogo" | "none";
    direction?: "row" | "column";
  };
  
  export type LoginFormProps = {
    content?: {
      email?: string;
      password?: string;
      heading?: string;
      description?: string | ReactNode;
      showHeading?: boolean;
    };
    handlers?: {
      onChange?: (field: "email" | "password", value: string) => void;
      onSubmit?: () => void;
    };
    style?: {
      wrapper?: StackProps;
      heading?: BoxProps;
      input?: {
        email?: Partial<React.ComponentProps<typeof Input>>;
        password?: Partial<React.ComponentProps<typeof Input>>;
      };
      submitButton?: Partial<React.ComponentProps<typeof Button>>;
      logoWrapper?: BoxProps;
      brandWrapper?: BoxProps;
    };
    layoutConfig?: LayoutConfig;
    slots?: {
      logo?: ReactNode;
      brandName?: ReactNode;
      description?: ReactNode;
      aboveHeading?: ReactNode;
      belowHeading?: ReactNode;
      aboveForm?: ReactNode;
      belowEmail?: ReactNode;
      belowPassword?: ReactNode;
      belowSubmit?: ReactNode;
      footer?: ReactNode;
    };
    children?: ReactNode;
  };
  