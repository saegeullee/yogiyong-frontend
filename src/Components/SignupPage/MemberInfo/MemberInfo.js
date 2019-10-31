import React from 'react';
import '../InputListGroup.scss'

class MemberInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                    id: 0,
                    email: "",
                    pwd: "",
                    repwd: "",
                    nickname: ""
                }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        // this.props.onInput(this.state)
    }
    // handleInsert = (data) => {
    //     // const { inputInformation } = this.state
    //     this.setState({
    //         inputInformation: this.state.inputInformation.concat({ id: this.id++, ...data })
    //     })
    // }

    render() {
        //  비밀번호 경고창 로직 구현1 but 컴파일 에러: cannot read property of length;
        const copiedState = this.state;
        const pwdErrMsg = copiedState.pwd.length;
        const repwdErrMsg = copiedState.repwd.length;
        console.log(this.state)
        return (
            <div>
                <ul className="join-form__input-list-group">
                    <li>
                        <input
                            className="join-form__input"
                            placeholder={this.props.data[0].placeholder}
                            type={this.props.data[0].type}
                            name={this.props.data[0].name}
                            onChange={this.handleChange}>
                        </input>
                    </li>
                    <li>
                        <input
                            className="join-form__input"
                            placeholder={this.props.data[1].placeholder}
                            type={this.props.data[1].type}
                            name={this.props.data[1].name}
                            onChange={this.handleChange}>
                        </input>
                        <span> {(pwdErrMsg) < 8 && (pwdErrMsg > 0) ? "비밀번호는 8자 이상 입니다" : " "} </span>
                    </li>
                    <li>
                        <input
                            className="join-form__input"
                            placeholder={this.props.data[2].placeholder}
                            type={this.props.data[2].type}
                            name={this.props.data[2].name}
                            onChange={this.handleChange}>
                        </input>
                        <span>{ (repwdErrMsg) < 8 && (repwdErrMsg > 0) ? "비밀번호는 8자 이상 입니다" : " "} </span>
                    </li>
                    <li>
                        <input
                            className="join-form__input"
                            placeholder={this.props.data[3].placeholder}
                            type={this.props.data[3].type}
                            name={this.props.data[3].name}
                            onChange={this.handleChange}>
                        </input>
                    </li>
                </ul>
            </div>
        )
    }
}


export default MemberInfo;