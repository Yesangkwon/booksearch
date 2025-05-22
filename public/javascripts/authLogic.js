import { getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from 'https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js'
class AuthLogic{
  //아래 생성자 함수는 AuthLogic 생성될 때 호출된다.
  //생성될 때 -> const authLogic = new AuthLogic()
  constructor(){//생성자 함수 - 전변 초기화
    this.auth = getAuth()
    this.gitProvider = new GithubAuthProvider()
    this.googleProvider = new GoogleAuthProvider()
  }
  getUserAuth = () => {
    return this.auth
  }
  getGoogleAuthProvider = () => {
    return this.googleProvider
  }
}
export default AuthLogic

//구글 계정 로그인은 로그인 상태를 관리하는 함수를 제공하고있다.
//클래스 밖으로 함수를 뺀 이유는 매번 객체 생성을 하고 호출해야 하므로
//객체 생성 없이도 수시로 호출하기 편리하도록 해 본다.
export const onAuthChange = async(auth) => {
  console.log('onAuth호출');
  await auth.onAuthStateChanged(user => {
    return user
  })
}

export const loginKakao = () => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}//end of loginKakao

export const logout = auth => {
  return new Promise((resolve, reject) => {
    auth.signOut().catch(e=> reject(alert(e+": 로그아웃 오류입니다.")))
    resolve()
  })
}//end of logout

export const loginGoogle = (auth, googleProvider) => {
  console.log('loginGoogle 호출');
  console.log(auth);
  console.log(googleProvider);
  return new Promise((resolve, reject)=> {

    signInWithPopup(auth, googleProvider)
      .then((result) => {//내가 구글회원이라면 프로필 정보가 있다.
        console.log(result);//[object Object]
        console.log(JSON.stringify(result));
        const user = result.user;
        resolve(user)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(error)
      });

  })
}//end of loginGoogle