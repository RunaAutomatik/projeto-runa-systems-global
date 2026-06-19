import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Text,
} from "@react-email/components";

interface OnboardingEmailProps {
  firstName: string;
  menteeSlug: string;
}

export function OnboardingEmail({
  firstName,
  menteeSlug,
}: OnboardingEmailProps) {
  const platformUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? "https://runa.ai"}/${menteeSlug}/home`;

  return (
    <Html lang="pt">
      <Head />
      <Body style={body}>
        <Container style={container}>
          <Text style={heading}>Bem-vindo ao RUNA OS, {firstName}!</Text>

          <Text style={paragraph}>
            Seu acesso está ativo. A plataforma já está disponível — você pode
            entrar agora e explorar o ambiente. Arthur vai marcar a Sessão 01 em
            breve.
          </Text>

          <Section style={buttonSection}>
            <Button href={platformUrl} style={button}>
              Acessar plataforma →
            </Button>
          </Section>

          <Text style={paragraph}>
            <strong>Próximos passos:</strong>
          </Text>
          <Text style={list}>
            1. Acesse a plataforma pelo botão acima e confirme seu login.
          </Text>
          <Text style={list}>
            2. Aguarde Arthur marcar a Sessão 01 — você receberá um aviso.
          </Text>
          <Text style={list}>
            3. Qualquer dúvida, responda diretamente este email.
          </Text>

          <Hr style={hr} />

          <Text style={footer}>Arthur Runa · arthur@runa.ai</Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#0a0a0a",
  fontFamily: "'Inter', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "40px 24px",
  maxWidth: "560px",
};

const heading = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "600",
  marginBottom: "24px",
};

const paragraph = {
  color: "#a0a0a0",
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "16px",
};

const list = {
  color: "#a0a0a0",
  fontSize: "15px",
  lineHeight: "1.6",
  marginBottom: "8px",
  paddingLeft: "8px",
};

const buttonSection = {
  marginBottom: "32px",
};

const button = {
  backgroundColor: "#ffffff",
  borderRadius: "6px",
  color: "#0a0a0a",
  fontSize: "15px",
  fontWeight: "600",
  padding: "12px 24px",
  textDecoration: "none",
};

const hr = {
  borderColor: "#1a1a1a",
  margin: "32px 0 24px",
};

const footer = {
  color: "#444444",
  fontSize: "13px",
};
