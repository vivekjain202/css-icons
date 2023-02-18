import {
    Circle,
    SemiCircle,
    HorizontalLine,
    VerticalLine,
    SolidTriangle,
    Square,
    Reactangle,
    CrossSign,
    Star,
    Apps,
    SunSolid,
    SunSolidHorizon,
    ArrowToLeft,
    ArrowToRight,
    ArrowToDown,
    ArrowToUp,
    TripleDotsHorizontal,
    TripleDotsVertical,
    MenuIconHorizontal,
    File,
    Folder,
    Profile,
    BatteryEmpty,
    BatteryHalfEmpty,
    BatteryFull,
    Mobile,
    Laptop,
    LaptopWithText,
    Building,
    NotAllowed,
    CreditCard,
    DiceOne,
    DiceTwo,
    DiceThree,
    DiceFour,
    DiceFive,
    DiceSix,
    OpenInNewTab,
    Windows,
    PlusSign,
    MinusSign,
    MultiplySign,
    DivideSign,
    Gmail,
    Instagram,
    Focus,
    React,
    BriefCase,
    Globe,
    Moon,
    Correct,
    Wrong,
    Search,
    ZoomIn,
    ZoomOut,
    USB,
    Eye,
    Image,
    Lock,
    LockOpen,
    Dialpad,
    Pokemon,
    Calendar,
    SettingsSlider,
    Mouse,
    Facebook,
    List,
    Marker,
    Youtube,
    Home,
    Camera,
    Stats,
    UserAdd,
    Pause,
    Clipboard,
    Magnet,
    Music,
    Ticket,
    Film,
    ApplicationWindow,
    MugSaucer,
    MicroChip,
    Wifi,
    Video
  } from "./single-element-icons";

import { TwitterBadge } from "./multi-element-icons/twitterBadge";
import { TruckFront } from "./multi-element-icons/truckFront";

const ComponentMapData = [
  ['dice_one', DiceOne],
  ['dice_two', DiceTwo],
  ['dice_three',DiceThree],
  ['dice_four',DiceFour],
  ['dice_five',DiceFive],
  ['dice_six',DiceSix],
  ['apps', Apps],
  ['sun_solid',SunSolid],
  ['sun_solid_horizon',SunSolidHorizon],
  ['arrow_to_left', ArrowToLeft],
  ['arrow_to_right', ArrowToRight],
  ['arrow_to_down', ArrowToDown],
  ['arrow_to_up',  ArrowToUp],
  ['file',File],
  ['folder', Folder],
  ['building', Building],
  ['credit_card', CreditCard],
  ['windows', Windows],
  ['solid_triangle',SolidTriangle],
  ['plus', PlusSign],
  ['minus', MinusSign],
  ['multiply', MultiplySign],
  ['divide',DivideSign],
  ['truck_front', TruckFront],
  ['gmail', Gmail],
  ['instagram', Instagram],
  ['facebook', Facebook],
  ['globe',Globe],
  ['moon', Moon],
  ['correct',Correct],
  ['wrong',  Wrong],
  ['search', Search],
  ['zoom_in', ZoomIn],
  ['zoom_out',ZoomOut],
  ['usb', USB],
  ['eye', Eye],
  ['image', Image],
  ['lock', Lock],
  ['lock_open',LockOpen],
  ['dialpad',Dialpad],
  ['pokemon',  Pokemon],
  ['calendar', Calendar],
  ['settings_slider', SettingsSlider],
  ['mouse',Mouse],
  ['list', List],
  ['marker', Marker],
  ['youtube', Youtube],
  ['home', Home],
  ['camera',Camera],
  ['twitter_badge', TwitterBadge],
  ['stats', Stats],
  ['pause', Pause],
  ['clipboard', Clipboard],
  ['magnet', Magnet],
  ['music', Music],
  ['ticket', Ticket],
  ['film', Film],
  ['application_window', ApplicationWindow],
  ['mug_saucer', MugSaucer],
  ['microChip', MicroChip],
  ['wifi', Wifi],
  ['video', Video],
  //   // light icons
  ['battery_full', BatteryFull],
  ['battery_half_empty',BatteryHalfEmpty],
  ['battery_empty',BatteryEmpty],
  ['circle', Circle],
  ['semi_circle',SemiCircle],
  ['horizontal_line', HorizontalLine],
  ['vertical_line',VerticalLine],
  ['square',Square],
  ['rectangle', Reactangle],
  ['cross', CrossSign],
  ['star',  Star],
  ['triple_dot_horizontal',TripleDotsHorizontal],
  ['triple_dot_vertical', TripleDotsVertical],
  ['menu_horizontal', MenuIconHorizontal],
  ['profile', Profile],
  ['mobile', Mobile],
  ['laptop', Laptop],
  ['laptop_with_text', LaptopWithText],
  ['open_in_new_tab', OpenInNewTab],
  ['not_allowed', NotAllowed],
  ['focus', Focus],
  ['react',React],
  ['briefcase',BriefCase],
  ['user_add',  UserAdd]
]

export const ComponentMap = new Map(ComponentMapData)