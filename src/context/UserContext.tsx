import { getCurrentUser } from "@/services/authService";
import { User } from "@/types/user";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
type TUserContext = {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
const UserContext = createContext<TUserContext | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const handleUser = async () => {
    const user = await getCurrentUser();
    console.log(user);
    setUser(user);
    setLoading(false);
  };
  useEffect(() => {
    handleUser();
  }, [loading]);
  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const context = useContext(UserContext);
  if (context == undefined) {
    throw new Error("use user must be used within UserProvider");
  }
};
export default UserProvider;
