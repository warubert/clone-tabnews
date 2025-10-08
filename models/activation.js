import email from "infra/email.js";

async function sendEmailToUser(user) {
  await email.send({
    from: "War <contato@war.com>",
    to: user.email,
    subject: "Confirmação de cadastro",
    text: `${user.username}, clique no link abaixo para ativar seu cadastro

http://localhost:3000/api/v1/activation/${user.activation_token}

Atenciosamente,
Equipe War`,
  });
}

const activation = {
  sendEmailToUser,
};

export default activation;
