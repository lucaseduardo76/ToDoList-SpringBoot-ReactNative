export interface UserData {
    id: number;
    name: string;
    password: string;
    email: string;
    tasks: Task[];
  }

export interface Task {
    id: number;
    title: string;
    description: string;
    status: 'PROCESS' | 'DONE';
  }

  export interface TaskRequest {
    title: string;
    description: string;
  }

  // types/navigation.ts
import { StackNavigationProp} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Defina os parâmetros da sua navegação
export type RootStackParamList = {
  Login: undefined;
  Home: {id: string | number};
};

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
  
