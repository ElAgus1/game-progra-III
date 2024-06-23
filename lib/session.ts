import { auth } from './auth';

export async function getCurrentUserId() {
    const session = await auth();
    if (session?.user === undefined) {
      return false;
    }else{
      return true;
    }

    
  }

