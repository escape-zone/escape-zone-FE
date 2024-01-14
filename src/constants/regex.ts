export const koreanReg = new RegExp(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g); // 한글
export const numberReg = new RegExp(/[0-9]/g); // 숫자
export const englishReg = new RegExp(/[a-zA-Z]/g); // 영어
export const urlReg = new RegExp(/^(https?:)\/\/(([^:/?#]*)(?::([0-9]+))?)([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/); // url 로직
export const addCommaReg = new RegExp(/\B(?=(\d{3})+(?!\d))/g); // 3자리 단위로 comma
export const dateReg = new RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/); // 날짜
export const blankReg = new RegExp(/\s/g); // 공백
export const emailSpecialTextReg = new RegExp(/[`~₩!#$%^&*()_|+\=?;:'",<>\-\{\}\[\]\\\/]/g); // 모든 특수문자
export const specialTextReg = new RegExp(/[`~₩!@#$%^&*()_|+\=?;:'",.<>\-\{\}\[\]\\\/]/g); // 모든 특수문자
export const specialTextAndSpaceReg = new RegExp(/[`~₩!@#$%^&*()_|+\=?;:'",.<>\-\{\}\[\]\\\/\s]/g); // 특수문자 + 공백
export const specialTextForNumberReg = new RegExp(/[`~₩!@#$%^&*()_|+\=?;:'",<>\{\}\[\]\\\/\s]/g); // , - 제외한 특수문자
export const duplicateZeroReg = new RegExp(/^0+/g); // 0 중복
export const validatePasswordReg = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/); // 비밀번호 검사
export const serverErrorReg = /5[0-9][0-9]/; // 500 서버 에러 검사
export const clientErrorReg = /4[0-9][0-9]/; // 400 클라이언트 에러 검사
