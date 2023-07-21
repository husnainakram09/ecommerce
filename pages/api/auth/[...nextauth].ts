import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { name, password } = credentials as {
          name: string;
          password: string;
        };
        //
        //call point for login or authenticated the protective route
        // if (res?.status !== 200) throw new Error(res);
        return {
          id: 'res',
          name: 'res',
          email: 'res',
        };
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard/home`;
    },
    async jwt({ user, token }) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.uid;
      return session;
    },

  },
  secret: process.env.NEXTAUTH_SECRET,


};

export default NextAuth(authOptions);