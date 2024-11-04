import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await getUser(user.email);
        const fullName = user.name.split(" ");

        if (!existingUser)
          await createUser({
            email: user.email,
            firstName: fullName[0],
            lastName: fullName[1],
          });
        return true;
      } catch {
        return false;
      }
    },
    async session({ session }) {
      const user = await getUser(session.user.email);
      session.user.userId = user.id;
      return session;
    },
  },
  pages: { signIn: "/login" },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
