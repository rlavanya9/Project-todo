const Link =  window.ReactRouterDOM.Link;
const styled = window.styled;


const container = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(108deg, rgb(1, 1, 1) 0%,rgba(0, 0, 0, 0.9) 100%);

`;

const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px) {
    height: 80%
}
`;


const Icon = styled.div`
margin-left: 32px;
margin-right: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 400px) {
    margin-left: 16px;
    margin-top: 8px;
}
`;

const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px){
    padding: 10px
}
`;

const Form = styled.form`
background: #010101;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

@media screen and (max-width: 400px) {
    padding: 32px 32px;
}
`;

const FormH1 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`;

const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`;

const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`;

const FormButton = styled.button`
background: #01bf71;
padding: 16px 0;
border: None;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`;

const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px; 
`;


const SignIn = () => {
    return (
        <React.Fragment>
            <FormWrap>
                <Icon to="/">TODO</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1> sign in to your account </FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' placeholder='Enter your email' id='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' placeholder='Enter your password' id='password'  required />
                        <FormButton type='submit'> Continue </FormButton>
                        {/* <Text>Forgot password</Text> */}
                    </Form>
                </FormContent>
            </FormWrap>
        </React.Fragment>
    )
} 

function Signin() {
    return (
      <div className="Signin">
        <SignIn />
      </div>
    );
  }
  
  // export default App;
  
  