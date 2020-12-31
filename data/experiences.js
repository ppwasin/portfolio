const experiences = [
  {
    company: "Gojek",
    roleName: "Mobile Engineer (iOS)",
    roleDuration: "Mar 2020 up to now",
    roleOverview:
      "Working as the Developer Experience (devX) team member at Gojek for developing and maintaining some core libraries and framework. At the same time research on how to improve developer experience in current code base.",
    roleBullets: [
      "Takeover Config Provider module for planning, maintaining, and add more functionality. The module is the APIs unification and cache mechanism of all remote configurations sources in the Gojek App.",
      "Maintain and develop CI script for automating task such as reporting the new release from Gitlab to slack, consume internal API for updating existing code base.",
      "Take part in refactoring launching module, the module that responsible for launching all product in Gojek.",
      "Depend on the requirement, may have opportunity to do on both Android and iOS to ensure feature parity between two platform (Android & iOS).",
    ],
  },
  {
    company: "If You Can, LLC",
    roleApp: "NotifyMe 2",
    roleName: "Senior Android Developer",
    roleDuration: "Dec 2018 – March 2020",
    roleOverview:
      "Develop new version of NotifyMe, make a migration from NotifyMe 1 to NotifyMe 2. The project structure rely heavenly on MVI & MVVM pattern by using Rxjava, Room, LiveData, Dagger.",
    roleBullets: [
      "Develop project structure with MVI, MVVM approach. Our structure use room as the single source of truth. The UI and View State is like a reflection of Room database. Since we need to synchronize content that share across several screen",
      "Develop the navigation module that free from the android context according to the principle that business layer should be driven the navigation.",
      "Develop beacon service and App permission for fetching notification from beacon identifier.",
      "Develop online/offline data read feature with infinite scrolling functionality that can reuse across various page on the app",
      "Develop place and notification’s related operations like viewing the place details, notification details and making a bookmark or subscribe operation",
      "Develop place searching functionality based on category and keywords. This feature allow user to search and make a subscription to his/her interested place.",
      "Develop authentication functionality such as logout, login",
      "Develop multi language base class for handling inapp change language",
      "Config Proguard, Firebase and Crashlytic",
      "Develop CI & CD system with Fastlane and Travis. The script make a test to every pull request to main branch. It also ease the release process either on play store or fabic beta channel.",
    ],
  },
  {
    company: "If You Can, LLC",
    roleApp: "FuturePark",
    roleName: "Senior Android Developer",
    roleDuration: "Aug 2018 – Dec 2018",
    roleOverview:
      "Developing an Android application for broadcasting shop promotion base on nearby beacon.",
    roleBullets: [
      "Develop project structure with MVI, MVVM approach",
      "Develop beacon service and App permission for fetching promotion from beacon identifier",
      "Develop multi language base class for handling in-app change language",
      "Develop UI parts: Promotions, Promotion by type, Group and Friend, Group related feature such as searching for group and member, invite member to join group, request to join group",
      "Config Proguard and Crashlytic",
    ],
  },
  {
    company: "Centre for Network Research at PSU (CNR)",
    roleApp: "e-Health Connect",
    roleName: "Researcher and Android Developer",
    roleDuration: "Jan 2017 – Oct 2018",
    roleOverview:
      "Develop android application for gathering health and device data from various Bluetooth devices",
    roleBullets: [
      "Developed android service for gathering health data from Bluetooth devices in-cluding IEEE 11073 on classical Bluetooth, GATT profile on low-energy Bluetooth, and some peripheral devices via Bluetooth socket.",
      "Developed user interface for allowing user to manage Bluetooth connection, and data that gathering from Bluetooth device",
      "Managed local database through Room APIs",
      "Continuous refactored code into testable, reusable code by properly applying de-sign patterns. ",
    ],
  },
];

export default experiences;
