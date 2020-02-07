import Vue from "vue";
import Vuex from "vuex";
import * as UserPayload from "./payloads/user";
import * as UserGroupPayload from "./payloads/usergroup";
import * as UserSession from "./payloads/usersession";
import * as DataSourcePayload from "./payloads/datasource";
import * as DataSourceTypePayload from "./payloads/datasourcetype";
import * as IndicatorGroupPayload from "./payloads/indicatorgroup";
import * as IndicatorPayload from "./payloads/indicator";
import * as IndicatorTypePayload from "./payloads/indicatortype";
import * as LogPayload from "./payloads/log";
import * as ParameterPayload from "./payloads/parameter";
import * as SessionPayload from "./payloads/session";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    graphqlUrl: "/graphql",

    // Error message
    errorObject: {
      flag: false,
      message: ""
    },

    // Session
    currentUser: {
      isAuthenticated: false, // Used to customize UI display
      role: "anonymous" // Used to customize UI display
    },

    // Authenticate user
    mutationAuthenticateUser: UserSession.mutationAuthenticateUser,
    queryGetCurrentUser: UserSession.queryGetCurrentUser,

    // Users queries and mutations
    queryGetAllUsers: UserPayload.queryGetAllUsers,
    queryGetUser: UserPayload.queryGetUser,
    mutationCreateUser: UserPayload.mutationCreateUser,
    mutationUpdateUser: UserPayload.mutationUpdateUser,
    mutationCreatePassword: UserPayload.mutationCreatePassword,
    mutationUpdatePassword: UserPayload.mutationUpdatePassword,
    mutationSearchUser: UserPayload.mutationSearchUser,
    mutationCreateUserGroupMembership: UserPayload.mutationCreateUserGroupMembership,
    mutationDeleteUserGroupMembership: UserPayload.mutationDeleteUserGroupMembership,

    // User groups queries and mutations
    queryGetAllUserGroups: UserGroupPayload.queryGetAllUserGroups,
    queryGetUserGroup: UserGroupPayload.queryGetUserGroup,
    queryGetUserUserGroups: UserGroupPayload.queryGetUserUserGroups, // Data for user groups drodpdown in user form
    mutationCreateUserGroup: UserGroupPayload.mutationCreateUserGroup,
    mutationUpdateUserGroup: UserGroupPayload.mutationUpdateUserGroup,
    mutationSearchUserGroup: UserGroupPayload.mutationSearchUserGroup,

    // Data sources queries and mutations
    queryGetAllDataSources: DataSourcePayload.queryGetAllDataSources,
    queryGetDataSource: DataSourcePayload.queryGetDataSource,
    queryGetDataSources: DataSourcePayload.queryGetDataSources, // Data for data sources drodpdown in parameter form
    mutationCreateDataSource: DataSourcePayload.mutationCreateDataSource,
    mutationUpdateDataSource: DataSourcePayload.mutationUpdateDataSource,
    mutationDeleteDataSource: DataSourcePayload.mutationDeleteDataSource,
    mutationSearchDataSource: DataSourcePayload.mutationSearchDataSource,
    mutationTestDataSource: DataSourcePayload.mutationTestDataSource,

    // Data source types queries and mutations
    queryGetAllDataSourceTypes: DataSourceTypePayload.queryGetAllDataSourceTypes,
    queryGetDataSourceTypes: DataSourceTypePayload.queryGetDataSourceTypes,

    //Indicator groups queries and mutations
    queryGetAllIndicatorGroups: IndicatorGroupPayload.queryGetAllIndicatorGroups,
    queryGetIndicatorGroup: IndicatorGroupPayload.queryGetIndicatorGroup,
    queryGetIndicatorGroups: IndicatorGroupPayload.queryGetIndicatorGroups, // Data for indicator groups drodpdown in indicator form
    mutationCreateIndicatorGroup: IndicatorGroupPayload.mutationCreateIndicatorGroup,
    mutationUpdateIndicatorGroup: IndicatorGroupPayload.mutationUpdateIndicatorGroup,
    mutationDeleteIndicatorGroup: IndicatorGroupPayload.mutationDeleteIndicatorGroup,
    mutationSearchIndicatorGroup: IndicatorGroupPayload.mutationSearchIndicatorGroup,
    mutationExecuteIndicatorGroup: IndicatorGroupPayload.mutationExecuteIndicatorGroup,

    //Indicator queries and mutations
    queryGetAllIndicators: IndicatorPayload.queryGetAllIndicators,
    queryGetIndicator: IndicatorPayload.queryGetIndicator,
    mutationCreateIndicator: IndicatorPayload.mutationCreateIndicator,
    mutationUpdateIndicator: IndicatorPayload.mutationUpdateIndicator,
    mutationDeleteIndicator: IndicatorPayload.mutationDeleteIndicator,
    mutationSearchIndicator: IndicatorPayload.mutationSearchIndicator,
    mutationExecuteIndicator: IndicatorPayload.mutationExecuteIndicator,
    mutationDuplicateIndicator: IndicatorPayload.mutationDuplicateIndicator,
    queryGetIndicatorSessions: IndicatorPayload.queryGetIndicatorSessions,

    //Indicator types queries and mutations
    queryGetIndicatorTypes: IndicatorTypePayload.queryGetIndicatorTypes, // Data for indicator types drodpdown in indicator form

    // Logs queries and mutations
    queryGetBatchLog: LogPayload.queryGetBatchLog,
    queryGetSessionLog: LogPayload.queryGetSessionLog,
    queryGetDataSourceLog: LogPayload.queryGetDataSourceLog,

    //Indicator parameters queries and mutations
    mutationCreateParameter: ParameterPayload.mutationCreateParameter,
    mutationUpdateParameter: ParameterPayload.mutationUpdateParameter,
    mutationDeleteParameter: ParameterPayload.mutationDeleteParameter,
    queryGetParameterTypes: ParameterPayload.queryGetParameterTypes, // Data for indicator parameter types drodpdown in indicator parameter form

    //Sessions queries
    queryGetAllSessions: SessionPayload.queryGetAllSessions,
    mutationSearchSession: SessionPayload.mutationSearchSession
  },
  mutations: {
    errorObject(state, errorObject) {
      state.errorObject = errorObject;
    },
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    }
  }
});
