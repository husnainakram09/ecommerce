import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        //call point for login or authenticated the protective route
        let res: any = await axios.post(`${process.env.NEXT_END_POINT}/auth/login`, {
          username: email, password
        });
        if (res) console.log(res?.data);

        if (res?.status !== 201) throw new Error(res);
        return {
          id: res?.data?._id,
          name: res?.data?.username,
          accessToken: res?.data?.accessToken,
        };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard/home`;
    },
    async jwt({ user, token }: any) {
      if (user) {
        token.uid = user.id;
        token.jwt = user.accessToken;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.uid;
      session.user.accessToken = token.jwt;
      session.user.name = token.name;
      console.log(session);

      return session;
    },

  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);