import React from 'react';
import './SignUp.scss';
import MemberInfo from '../../Components/SignupPage/MemberInfo/MemberInfo.js'
import PhoneInfo from '../../Components/SignupPage/PhoneInfo/PhoneInfo.js'
import TermsAndCondition from '../../Components/SignupPage/TermsAndCondition/TermsAndCondition.js'
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            personalInformation: [
                {
                    placeholder: "(필수) 이메일 주소 입력",
                    type: "text"
                },
                {
                    placeholder: "(필수) 비밀번호 입력",
                    type: "password"
                },
                {
                    placeholder: "(필수) 비밀번호 재확인",
                    type: "password"
                },
                {
                    placeholder: "(선택) 닉네임 입력",
                    type: "text"
                }
            ],
            phoneInformation: [
                {
                    placeholder: "(필수) 휴대폰 전화번호 입력 (-제외)",
                    type: "number",
                    text: "인증",
                    buttonType: "button"
                },
                {
                    placeholder: "인증번호 입력",
                    type: "number",
                    text: "확인",
                    buttonType: "button"
                }
            ],
            alertMssg:
            {
                eMailAlert: "유효한 이메일 주소 형식이 아닙니다",
                pwdAlert1: "비밀번호는 8자 이상입니다.",
                pwdAlert2: "비밀번호는 숫자,영문,특수문자를 포함하여야 합니다."

            }

        };
    }
    render() {
        return (
            <div className="join-form-container"> 
                <div className="join-form">
                    <div className="join-form__member-info">
                        <strong className="join-form__text-box">회원정보 입력</strong>
                        <MemberInfo data={this.state.personalInformation} />
                        <span className="join-form__member-info__alert-msg">
                            {this.state.alertMssg.eMailAlert}
                        </span>
                    </div>
                    <div className="join-form__phone-verification">
                        <strong className="join-form__text-box">휴대폰 인증</strong>
                        <PhoneInfo data={this.state.phoneInformation} />
                        <p className="join-form__text-box-small">    인증번호가 도착하지 않았을 경우 '인증'버튼을 다시 눌러주세요. </p>
                    </div>
                    <strong className="join-form__text-box">약관동의</strong>
                    <div className="join-form__terms-condition">
                        <input className="join-form__terms-button" type="checkbox" id="1" />
                        <label className="join-form__terms-label" for="1">
                            <span className="join-form__terms-span"></span>
                            전체동의
                    </label>
                    </div>
                    <TermsAndCondition text="이용약관 (필수)" link="https://www.yogiyo.co.kr/mobile/?gclid=CjwKCAjwo9rtBRAdEiwA_WXcFvk8DXxa71_aj5DrBmVi-DtidZLkKN-uSsFatNl9GwDWeVVNrPy7SxoCf-EQAvD_BwE#/policy" />
                    <TermsAndCondition text="개인정보 수집 및 이용동의 (필수)" link="https://www.yogiyo.co.kr/mobile/?gclid=CjwKCAjwo9rtBRAdEiwA_WXcFvk8DXxa71_aj5DrBmVi-DtidZLkKN-uSsFatNl9GwDWeVVNrPy7SxoCf-EQAvD_BwE#/collect_join/" />
                    <TermsAndCondition text="만 14세 이상 이용자 (필수)" link="https://www.yogiyo.co.kr/p/faq/#4-4/" />
                    <div className="join-form__terms-condition1">
                        <input className="join-form__terms-button" type="checkbox" id="1" />
                        <label className="join-form__terms-label" for="1">
                            <span className="join-form__terms-span"></span>
                            요기요 혜택알림 동의 (선택)
                    </label>
                    </div>
                    <button className="join-form__submit-bttn">회원가입 완료</button>
                </div>
            </div>
        )
    }
}
export default SignUp;

