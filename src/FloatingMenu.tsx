import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
  StyleProp,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import * as Animatable from "react-native-animatable";

// Define types for props
interface ActionMenu {
  title?: string;
  icon?: string;
  handler: () => void;
}

interface FloatingMenuProps {
  actionMenus?: ActionMenu[];
  subActionButtonStyle?: StyleProp<ViewStyle>;
  backShadow?: boolean;
  subActionTextStyle?: StyleProp<TextStyle>;
  backShadowStyle?: StyleProp<ViewStyle>;
  mainActionButtonStyle?: StyleProp<ViewStyle>;
  subActionContainerStyle?: StyleProp<ViewStyle>;
  mainActionButtonIcon?: string;
}

export default function FloatingMenu({
  actionMenus = [],
  subActionButtonStyle,
  backShadow = true,
  subActionTextStyle,
  backShadowStyle,
  mainActionButtonStyle,
  subActionContainerStyle,
  mainActionButtonIcon,
}: FloatingMenuProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const refs = useRef<any[]>([]);

  const toggleMenu = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsExpanded(false);
  };

  const animateMenuItems = (isExpanding: boolean) => {
    refs.current.forEach((ref, index) => {
      if (ref) {
        const animation = isExpanding ? "fadeInUp" : "fadeOutDown";
        ref[animation](500 + index * 100);
      }
    });
  };

  const animateBG = (isExpanding: boolean) => {
    if (refs.current[0]) {
      const animation = isExpanding ? "zoomIn" : "zoomOut";
      refs.current;
    }
  };

  useEffect(() => {
    if (isExpanded) {
      animateBG(true);
      animateMenuItems(true);
    } else {
      animateBG(false);
      animateMenuItems(false);
    }
  }, [isExpanded]);

  const renderSubActions = () => {
    return (
      <>
        {backShadow && (
          <Animatable.View
            ref={(ref) => (refs.current[0] = ref)}
            style={backShadowStyle || styles.BackGroundView}
          />
        )}
        <View style={subActionContainerStyle || styles.subActionsContainer}>
          {actionMenus.map((action, index) => (
            <Animatable.View
              key={index}
              ref={(ref) => (refs.current[index + 1] = ref)}
              style={styles.subActionButtonContent}
            >
              <TouchableOpacity
                onPress={() => {
                  closeMenu();
                  action.handler();
                }}
                style={styles.subActionTextView}
              >
                {action.title && (
                  <Text style={subActionTextStyle || styles.subActionText}>
                    {action.title}
                  </Text>
                )}
              </TouchableOpacity>
              {action.icon && (
                <TouchableOpacity
                  style={subActionButtonStyle || styles.subActionButton}
                  onPress={() => {
                    closeMenu();
                    action.handler();
                  }}
                >
                  <Icon name={action.icon} size={24} color="white" />
                </TouchableOpacity>
              )}
            </Animatable.View>
          ))}
        </View>
      </>
    );
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {renderSubActions()}
      <View
        style={{
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <TouchableOpacity
          style={mainActionButtonStyle || styles.mainActionButton}
          onPress={toggleMenu}
        >
          <Icon
            color={"white"}
            size={30}
            name={mainActionButtonIcon || "plus"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subActionsContainer: {
    position: "absolute",
    bottom: 85,
    right: 25,
  },
  subActionButtonContent: {
    flexDirection: "row",
  },
  subActionTextView: {
    borderRadius: 10,
    width: 150,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  subActionText: {
    padding: 10,
    color: "black",
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  subActionButton: {
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "blue",
  },
  BackGroundView: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * 0.5,
    zIndex: -1,
    borderTopLeftRadius: 300,
    bottom: -350,
  },
  mainActionButton: {
    backgroundColor: "blue",
    borderRadius: 40,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
