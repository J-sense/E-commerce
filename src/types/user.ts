export type User = {
  userId: string;
  name: string;
  email: string;
  hasShop: boolean;
  isActive: boolean;
  role: "user" | "admin"; // Assuming role can have specific values
  iat: number; // Issued at timestamp
  exp: number; // Expiry timestamp
};
