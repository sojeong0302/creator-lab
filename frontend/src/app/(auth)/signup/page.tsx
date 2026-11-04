import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";

export default function SignupPage() {
  return (
    <form className="flex flex-col items-center">
      <Input text="아이디" />
      <Input text="비밀번호" />
      <Input text="비밀번호 확인" />
      <Button text="회원가입" />
    </form>
  );
}
