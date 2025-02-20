import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return styles.bgSecondary;
    case "danger":
      return styles.bgDanger;
    case "success":
      return styles.bgSuccess;
    case "outline":
      return styles.bgOutline;
    default:
      return styles.bgPrimary;
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return styles.textPrimary;
    case "secondary":
      return styles.textSecondary;
    case "danger":
      return styles.textDanger;
    case "success":
      return styles.textSuccess;
    default:
      return styles.textDefault;
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  style,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, getBgVariantStyle(bgVariant), style]}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text style={[styles.text, getTextVariantStyle(textVariant)]}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    borderRadius: 50,
    padding: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  bgPrimary: { backgroundColor: "#0286FF" },
  bgSecondary: { backgroundColor: "#6B7280" },
  bgDanger: { backgroundColor: "#EF4444" },
  bgSuccess: { backgroundColor: "#10B981" },
  bgOutline: {
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderColor: "#D1D5DB",
  },
  text: {
    fontSize: 18,
    marginHorizontal: 8,
    fontFamily: "Jakarta",
  },
  textPrimary: { color: "#000" },
  textSecondary: { color: "#F3F4F6" },
  textDanger: { color: "#FEE2E2" },
  textSuccess: { color: "#D1FAE5" },
  textDefault: { color: "#FFF" },
});

export default CustomButton;
