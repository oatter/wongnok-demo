import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const handler = NextAuth({
  providers: [
     KeycloakProvider({
      clientId: 'wongnok',
      clientSecret: 'R6UCkSremn7nOYkNzqxJVUcVNPnG5fu7',
      issuer: `https://sso-dev.odd.works/realms/pea-devpool-2025`,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // เก็บ accessToken ที่ได้จาก provider (เช่น Keycloak)
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      // แปะ accessToken ลง session เพื่อดึงมาใช้ง่าย
      session.accessToken = token.accessToken
      return session
    }
  }
})

export { handler as GET, handler as POST }



