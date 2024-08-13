import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import * as Animatable from "react-native-animatable";

export default function FloatingMenu(props: {
  actionMenus?: Array<any>;
  subActionButtonStyle?: object;
  backShadow?: Boolean;
  subActionTextStyle?: object;
  backShadowStyle?: object;
  mainActionButtonStyle?: object;
  subActionContainerStyle?: object;
  mainActionButtonIcon?: string;
}) {
  const {
    actionMenus = [],
    subActionButtonStyle,
    backShadow = false,
    subActionTextStyle,
    backShadowStyle,
    mainActionButtonStyle,
    subActionContainerStyle,
    mainActionButtonIcon,
  } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    if (isExpanded) {
      handleOverlayPress();
    } else {
      setIsExpanded((prevState) => !prevState);
    }
  };

  const handleOverlayPress = () => {
    if (isExpanded) {
      if (backShadow === true) {
        animateBGClose();
        closeMenu();
        animateMenuItemsClose();
      } else {
        closeMenu();
        animateMenuItemsClose();
      }
    }
  };

  const closeMenu = () => {
    setTimeout(() => {
      setIsExpanded(false);
    }, 500);
  };

  const animateMenuItemsClose = () => {
    for (let i = 0; i < actionMenus.length; i++) {
      const ref = `menuItem${i}`;
      this[ref].fadeOutDown(300 + i * 200);
    }
  };

  const animateBG = () => {
    this["flotingBG"].zoomIn(250);
  };

  const animateBGClose = () => {
    this["flotingBG"].zoomOut(250);
  };

  useEffect(() => {
    if (isExpanded) {
      if (backShadow) {
        animateBG();
        animateMenuItems();
      } else {
        animateMenuItems();
      }
    }
  }, [isExpanded]);

  const animateMenuItems = () => {
    for (let i = 0; i < actionMenus.length; i++) {
      const ref = `menuItem${i}`;
      this[ref].fadeInUp(500 + i * 100);
    }
  };

  const renderSubActions = () => {
    return (
      <>
        <View
          style={
            subActionContainerStyle
              ? subActionContainerStyle
              : [styles.subActionsContainer]
          }
        >
          {actionMenus.map((action: any, index: any) => (
            <Animatable.View
              key={index}
              ref={(ref) => (this[`menuItem${index}`] = ref)}
              style={styles.subActionButtonContent}
            >
              <TouchableOpacity
                onPress={() => {
                  if (backShadow) {
                    closeMenu();
                    animateMenuItemsClose();
                    animateBGClose();
                    action.handler();
                  } else {
                    closeMenu();
                    animateMenuItemsClose();
                    action.handler();
                  }
                }}
                style={styles.subActionTextView}
              >
                {action.title && (
                  <Text
                    style={
                      subActionTextStyle
                        ? subActionTextStyle
                        : styles.subActionText
                    }
                  >
                    {action.title}
                  </Text>
                )}
              </TouchableOpacity>
              {action.icon && (
                <TouchableOpacity
                  key={index}
                  style={
                    subActionButtonStyle
                      ? { ...subActionButtonStyle }
                      : {
                          ...styles.subActionButton,
                        }
                  }
                  onPress={(e) => {
                    if (backShadow) {
                      closeMenu();
                      animateMenuItemsClose();
                      animateBGClose();
                      action.handler();
                    } else {
                      closeMenu();
                      animateMenuItemsClose();
                      action.handler();
                    }
                  }}
                >
                  <Icon name={action.icon} size={24} color="white" />
                </TouchableOpacity>
              )}
            </Animatable.View>
          ))}
        </View>
        {backShadow && (
          <Animatable.View
            ref={(ref) => (this[`flotingBG`] = ref)}
            style={backShadowStyle ? backShadowStyle : [styles.BackGroundView]}
          />
        )}
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
          style={
            mainActionButtonStyle
              ? mainActionButtonStyle
              : styles.mainActionButton
          }
          onPress={() => toggleMenu()}
        >
          <Icon
            color={"white"}
            size={30}
            name={mainActionButtonIcon ? mainActionButtonIcon : "plus"}
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
