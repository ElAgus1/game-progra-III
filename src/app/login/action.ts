'use server'
import { signIn } from "../../../lib/auth";

export async function googleLogin() {
  
    // TODO: handle google login errors, try catch is not working: Error: NEXT_REDIRECT
    // Check probably solution: https://github.com/nextauthjs/next-auth/discussions/9389
    await signIn('google', { callbackUrl: '/home' });
  }
  
  export async function magicLinkLogin(email : string ) {
    try {
      console.log(email);
      await signIn('nodemailer', {
        email: email.toLowerCase(),
        redirect: false,
        callbackUrl: '/home',
      });
    } catch (err) {
      console.error('Failed to send email');
      
    }
  }