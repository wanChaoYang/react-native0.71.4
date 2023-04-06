
import StyleSheet from '../01StyleSheet';
import FlexBox from '../02FlexBox';
import DimensionsView from "../03Dimensions"
import Bottom from "../04Bottom_Alert"
import SwitchAndStatubar from "../05Switch_Statubar"
import ActivityIndicator from '../06ActivityIndicator'
import Image from '../07Image'
import TextInput from '../08TextInput'
import Touchable from '../09Touchable'
import ScrollView from '../10ScrollView'
import SectionList from '../11SectionList'
import FlatList from '../12FlatList'
import Animated from '../13Animated'
import WebViewUri from '../14WebView/WebViewUri';
import WebViewHtml from '../14WebView/WebViewHtml';
import Picker from "../15Picker"
import Navigation from '../22Navigation/1_StackNavigator';
import BottomTab from '../22Navigation/2_BottomTab';
import DrawerNavigator from '../22Navigation/3_DrawerNavigator';
import MaterialTopTabNavigator from '../22Navigation/4_MaterialTopTabNavigator';
import NestingNavigation from '../23NestingNavigation';
import Swiper from "../16Swiper"
const router = [
    {
        name: "StyleSheet",
        component: StyleSheet,
    },
    {
        name: "Dimensions",
        component: DimensionsView,
    },
    {
        name: "FlexBox",
        component: FlexBox,
    },
    {
        name: "Bottom",
        component: Bottom,
    },
    {
        name: "SwitchAndStatubar",
        component: SwitchAndStatubar,
    },
    {
        name: "ActivityIndicator",
        component: ActivityIndicator,
    },
    {
        name: "Image",
        component: Image,
    },
    {
        name: "TextInput",
        component: TextInput,
    },
    {
        name: "Touchable",
        component: Touchable,
    },
    {
        name: "ScrollView",
        component: ScrollView,
    },
    {
        name: "SectionList",
        component: SectionList,
    },
    {
        name: "FlatList",
        component: FlatList,
    }, {
        name: "Animated",
        component: Animated,
    },
    {
        name: "WebViewUri",
        component: WebViewUri,
    }, {
        name: "WebViewHtml",
        component: WebViewHtml,
    }, {
        name: "Picker",
        component: Picker,
    }, {
        name: "Navigation",
        component: Navigation,
    }, {
        name: "BottomTab",
        component: BottomTab,
    },
    {
        name: "DrawerNavigator",
        component: DrawerNavigator,
    },
    {
        name: "MaterialTopTabNavigator",
        component: MaterialTopTabNavigator,
    },
    {
        name: "NestingNavigation",
        component: NestingNavigation,
    },
    {
        name: "Swiper",
        component: Swiper,
    },
    
]
export default router