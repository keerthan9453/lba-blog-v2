import { authMiddleware } from "@clerk/nextjs";

export const config = {
  matcher: [
    // Specify the routes you want to protect with Clerk authentication
    '/login-page/',
  ],
};

export default authMiddleware({
  // Add any specific configuration here if needed, like public routes
});