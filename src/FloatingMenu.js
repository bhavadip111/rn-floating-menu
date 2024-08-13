"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FloatingMenu;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var AntDesign_1 = __importDefault(require("react-native-vector-icons/AntDesign"));
var Animatable = __importStar(require("react-native-animatable"));
function FloatingMenu(_a) {
    var _b = _a.actionMenus, actionMenus = _b === void 0 ? [] : _b, subActionButtonStyle = _a.subActionButtonStyle, _c = _a.backShadow, backShadow = _c === void 0 ? true : _c, subActionTextStyle = _a.subActionTextStyle, backShadowStyle = _a.backShadowStyle, mainActionButtonStyle = _a.mainActionButtonStyle, subActionContainerStyle = _a.subActionContainerStyle, mainActionButtonIcon = _a.mainActionButtonIcon;
    var _d = (0, react_1.useState)(false), isExpanded = _d[0], setIsExpanded = _d[1];
    var refs = (0, react_1.useRef)([]);
    var toggleMenu = function () {
        setIsExpanded(function (prevState) { return !prevState; });
    };
    var closeMenu = function () {
        setIsExpanded(false);
    };
    var animateMenuItems = function (isExpanding) {
        refs.current.forEach(function (ref, index) {
            if (ref) {
                var animation = isExpanding ? "fadeInUp" : "fadeOutDown";
                ref[animation](500 + index * 100);
            }
        });
    };
    var animateBG = function (isExpanding) {
        if (refs.current[0]) {
            var animation = isExpanding ? "zoomIn" : "zoomOut";
            refs.current;
        }
    };
    (0, react_1.useEffect)(function () {
        if (isExpanded) {
            animateBG(true);
            animateMenuItems(true);
        }
        else {
            animateBG(false);
            animateMenuItems(false);
        }
    }, [isExpanded]);
    var renderSubActions = function () {
        return (<>
        {backShadow && (<Animatable.View ref={function (ref) { return (refs.current[0] = ref); }} style={backShadowStyle || styles.BackGroundView}/>)}
        <react_native_1.View style={subActionContainerStyle || styles.subActionsContainer}>
          {actionMenus.map(function (action, index) { return (<Animatable.View key={index} ref={function (ref) { return (refs.current[index + 1] = ref); }} style={styles.subActionButtonContent}>
              <react_native_1.TouchableOpacity onPress={function () {
                    closeMenu();
                    action.handler();
                }} style={styles.subActionTextView}>
                {action.title && (<react_native_1.Text style={subActionTextStyle || styles.subActionText}>
                    {action.title}
                  </react_native_1.Text>)}
              </react_native_1.TouchableOpacity>
              {action.icon && (<react_native_1.TouchableOpacity style={subActionButtonStyle || styles.subActionButton} onPress={function () {
                        closeMenu();
                        action.handler();
                    }}>
                  <AntDesign_1.default name={action.icon} size={24} color="white"/>
                </react_native_1.TouchableOpacity>)}
            </Animatable.View>); })}
        </react_native_1.View>
      </>);
    };
    return (<react_native_1.View style={{
            height: "100%",
            width: "100%",
            alignContent: "center",
            alignItems: "center",
        }}>
      {renderSubActions()}
      <react_native_1.View style={{
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 20,
            right: 20,
        }}>
        <react_native_1.TouchableOpacity style={mainActionButtonStyle || styles.mainActionButton} onPress={toggleMenu}>
          <AntDesign_1.default color={"white"} size={30} name={mainActionButtonIcon || "plus"}/>
        </react_native_1.TouchableOpacity>
      </react_native_1.View>
    </react_native_1.View>);
}
var styles = react_native_1.StyleSheet.create({
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
        width: react_native_1.Dimensions.get("screen").width,
        height: react_native_1.Dimensions.get("screen").height * 0.5,
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
