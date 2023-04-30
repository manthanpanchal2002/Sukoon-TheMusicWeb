import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
name: string|undefined;
email: string|undefined;

setName(name: string)
{
  this.name=name;
}
getName(){
  return this.name;
}

setEmail(email: string){
  this.email=email;
}

getEmail(){
  return this.email;
}

  // updateProfile(profileData: Partial<UserInfo>): Observable<any> {
  //   const user = this.auth.currentUser;
  //   return of(user).pipe(
  //     concatMap((user) => {
  //       if (!user) throw new Error('Not authenticated');

  //       return updateProfile(user, profileData);
  //     })
  //   );
  // }

  // logout(): Observable<any> {
  //   return from(this.auth.signOut());
  // }
}