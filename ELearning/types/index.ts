import {StackScreenProps} from '@react-navigation/stack';
import {PropsWithChildren} from 'react';

export type rootStackParamList = {
  Landing: undefined;
  Intro: undefined;
  LoginMethod: undefined;
  SignIn: undefined;
  SignUp: undefined;
  FillProfile: undefined;
  NewPin: undefined;
  SetFingerPrint: undefined;
  CreateNewPin: undefined;
  CategoriesScreen:undefined;
  MyCoursesScreen:undefined;
  HomeScreen:undefined;
  TransactionsScreen:undefined;
  InboxScreen:undefined;
  Profile:undefined;
  ForgotPassword:undefined;
  VerifyForgotPassword:undefined;
  CreateNewPassword:undefined;
  TopCoursesScreen:undefined;
  Receipt:undefined;
  EditStudentProfile:undefined;
  NotificationSettings:undefined;
  PaymentOption:undefined;
  SecurityOption:undefined;
  LanguageSettings:undefined;
  Terms:undefined;
};

export interface ScreenProps<ScreenName extends keyof rootStackParamList>
  extends StackScreenProps<rootStackParamList, ScreenName> {}

export interface IntroScrollProps
  extends ScreenProps<'Intro'>,
    PropsWithChildren {}

export interface AuthContainerProps extends PropsWithChildren {
  title: string;
  subTitle: string;
  footer: JSX.Element;
}
