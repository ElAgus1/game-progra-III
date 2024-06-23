import { redirect } from 'next/navigation';
import { getCurrentUserId } from '../../../lib/session';
import Game from './game'


export default async function Page(){
  const  isAuth = await getCurrentUserId();
  if (isAuth == false){
    redirect('/login')
  }
console.log(isAuth)

  return(<> 
        <Game/>
        </>
  );

}

