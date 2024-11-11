import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/assets/login/logo.svg"
          width={173}
          height={39}
          alt="Finance AI"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo(a)</h1>
        <p className="text-muted-foreground mb-8">
          A Finance AI é uma plataforma inteligente de gestão financeira, que
          utiliza IA para acompanhar suas movimentações e fornecer insights
          personalizados, facilitando o controle do seu orçamento e
          impulsionando seu planejamento financeiro.
        </p>
        <Button variant="outline">
          <LogInIcon className="mr-2" /> Fazer Login ou Registrar
        </Button>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/assets/login/bg.jpg"
          alt="Faça Login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
