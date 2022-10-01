import type {
  HelpCenterArticleSearchResult,
  HelpCenterCollectionContent,
  HelpCenterCollectionItem,
  IntercomType,
  MetaData,
  UpdateUserParamList,
} from "@intercom/intercom-react-native";
import { EmitterSubscription } from "react-native";

const webImplementation: IntercomType = {
  fetchHelpCenterCollections: function (): Promise<HelpCenterCollectionItem> {
    throw new Error("Function not implemented.");
  },
  searchHelpCenter: function (
    term: string
  ): Promise<HelpCenterArticleSearchResult> {
    throw new Error("Function not implemented.");
  },
  fetchHelpCenterCollection: function (
    id: string
  ): Promise<HelpCenterCollectionContent> {
    throw new Error("Function not implemented.");
  },
  displayArticle: function (articleId: string): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  displayCarousel: function (carouselId: string): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  displaySurvey: function (surveyId: string): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  displayHelpCenter: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  displayHelpCenterCollections: function (
    collections?: string[]
  ): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  displayMessageComposer: function (initialMessage?: string): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  displayMessenger: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  getUnreadConversationCount: function (): Promise<number> {
    throw new Error("Function not implemented.");
  },
  hideIntercom: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  logEvent: function (
    eventName: string,
    metaData?: MetaData
  ): Promise<boolean> {
    console.log(eventName);
    return Promise.resolve(true);
  },
  logout: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  registerIdentifiedUser: function (
    params: Partial<{ email: string; userId: string }>
  ): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  registerUnidentifiedUser: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  setBottomPadding: function (bottomPadding: number): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  setInAppMessageVisibility: function (
    visibility: "GONE" | "VISIBLE"
  ): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  setLauncherVisibility: function (
    visibility: "GONE" | "VISIBLE"
  ): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  setLogLevel: function (
    logLevel:
      | "ASSERT"
      | "DEBUG"
      | "DISABLED"
      | "ERROR"
      | "INFO"
      | "VERBOSE"
      | "WARN"
  ): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  setUserHash: function (hash: string): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  updateUser: function (params: UpdateUserParamList): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  handlePushMessage: function (): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  sendTokenToIntercom: function (token: string): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
  addEventListener: function (
    event:
      | "IntercomUnreadConversationCountDidChangeNotification"
      | "IntercomHelpCenterDidShowNotification"
      | "IntercomHelpCenterDidHideNotification"
      | "IntercomWindowDidHideNotification"
      | "IntercomWindowDidShowNotification",
    callback: (response: { count?: number; visible: boolean }) => void
  ): EmitterSubscription {
    throw new Error("Function not implemented.");
  },
};

export default webImplementation;
