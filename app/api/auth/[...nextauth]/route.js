import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDatabase } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDatabase();

        const userExists = await User.findOne({ email: profile.email });

        if (!userExists) {
          const username =
            profile.name !== "" && profile.name.includes(" ")
              ? profile.name.split(" ").join("").toLowerCase()
              : profile.email.split("@")[0];

          await User.create({
            email: profile.email,
            name: profile.name,
            username: username,
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
