import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";

export default function LoginPage() {
  return (
    <form className="flex flex-col items-center">
      <Input text="아이디" />
      <Input text="비밀번호" />
      <Button text="로그인" />
    </form>
  );
}
