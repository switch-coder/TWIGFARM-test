import React, { useState } from 'react';
import SignupPresenter from './SignupPresenter';

export default () => {

    const [language, setLanguage] = useState("한국어"),
        [radioValue, setValue] = useState("번역회사"),
        [userValue, setUserValue] = useState({
            Email: "",
            password: "",
            companyName: "",
            money: "",
            date: ""
        }),
        [error, setError] = useState({
            Email: false,
            password: false,
            companyName: false,
            money: false,
            date: false,
        }),
        TextKorean = {
            title: "Gconstudio 계정 만들기",
            subTitle: "하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수 있습니다.",
            translationCompany: "번역회사",
            client: "의뢰인",
            translator: "번역가",
            basicInformation: "기본정보 입력",
            email: "이메일(아이디)를 입력하세요.",
            emailHelper: "이메일 양식을 확인하세요",
            password: "비밀번호를 입력하세요.",
            passwordHelper: "비밀번호는 8자리 이상, 16자리 이하이고 영문, 숫자, 특수문자가 각 1자리 이상 포함되어야 합니다",
            companyName: "회사명을 입력하세요.",
            requiredValue: "필수 입력사항입니다.",
            enterCurrency: "화폐단위를 입력하세요.",
            date: "회사설립일을 입력하세요",
            next: "다음",
            login: "로그인",
        },
        TextEnglish = {
            title: "Gconstudio Create an accoun",
            subTitle: "You can use all Zicon Studio services with one account.",
            translationCompany: "Translation Company",
            client: "Client",
            translator: "Translator",
            basicInformation: "Enter Basic Information",
            email: "Please enter your email (ID).",
            emailHelper: "Please check your email form",
            password: "Please enter a password.",
            passwordHelper: "Password must be at least 8 digits and 16 digits or less and contain at least 1 digit each of English, numbers, and special characters.",
            companyName: "Please enter your company name.",
            requiredValue: "This is required",
            enterCurrency: "Please Enter Currency",
            date: "Please enter the company establishment date",
            next: "Next",
            login: "Login",
        }

    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
        passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

    const setEmail = (event) => {
        let { value } = event.target;
        setUserValue({
            ...userValue,
            Email: value
        })
        if (!emailRegExp.test(value)) {
            setError({
                ...error,
                Email: true
            })
        } else {
            setError({
                ...error,
                Email: false
            })
        }

    }
    const setPassword = (event) => {
        let { value } = event.target;
        setUserValue({
            ...userValue,
            password: value
        })
        console.log(passwordRegExp)
        if (!passwordRegExp.test(value)) {
            setError({
                ...error,
                password: true
            })
        } else {
            setError({
                ...error,
                password: false
            })
        }
        console.log(error.password)
        console.log(value)
    }

    const setCompanyName = (event) => {
        let { value } = event.target;
        setUserValue({
            ...userValue,
            companyName: value
        })
        if (value === "") {
            setError({
                ...error,
                companyName: true
            })
        } else {
            setError({
                ...error,
                companyName: false
            })
        }
    }

    const setMoney = (event) => {
        let { value } = event.target;
        setUserValue({
            ...userValue,
            money: value
        })
        if (value === "") {
            setError({
                ...error,
                money: true
            })
        } else {
            setError({
                ...error,
                money: false
            })
        }
    }

    const setDate = (event) => {
        let { value } = event.target;
        setUserValue({
            ...userValue,
            date: value
        })
        if (value === "") {

        } else {
            setError({
                ...error,
                money: false
            })
        }
    }

    const radioChange = (event) => {
        setValue(event.target.value);
    };

    const SignupClick = () => {
        if (!error.Email && !error.password && !error.companyName && userValue.money !== "" && userValue.date !== "" && userValue.Email !== "" && userValue.password !== "" && userValue.companyName !== "") {
            alert("회원가입 되었습니다. \n 가입형태: " + radioValue + "\n 이메일 :" + userValue.Email + "\n 회사이름: " + userValue.companyName + "\n 화폐단위: " + userValue.money + "\n 회사설립일: " + userValue.date);
        } else if (error.Email || userValue.Email === "") {
            alert("이메일 양식을 확인해주세요.")
            setError({
                ...error,
                Email: true
            })
        } else if (error.password || userValue.password === "") {
            alert("비밀번호 양식을 확인해주세요.")
            setError({
                ...error,
                password: true
            })
        } else if (error.companyName || userValue.companyName === "") {
            alert("회사이름을 입력해주세요.")
            setError({
                ...error,
                companyName: true
            })
        } else if (error.money) {
            alert("화폐단위를 설정해주세요.");
            setError({
                ...error,
                money: true
            })
        } else if (error.date) {
            alert("회사 설립일을 입력해주세요.")
            setError({
                ...error,
                date: true
            })
        }

    }

    const changeLanguage = (evnet) => {
        setLanguage(evnet.target.value)
    }
    console.log(TextKorean)
    return (<SignupPresenter
        userValue={userValue}
        errorValue={error}
        setEmail={setEmail}
        setPassword={setPassword}
        setCompanyName={setCompanyName}
        setMoney={setMoney}
        setDate={setDate}
        radioValue={radioValue}
        radioChange={radioChange}
        signupClick={SignupClick}
        Language={language}
        textLanguage={language && language === "한국어" ? TextKorean : TextEnglish}
        changeLanguage={changeLanguage}

    ></SignupPresenter>)
}