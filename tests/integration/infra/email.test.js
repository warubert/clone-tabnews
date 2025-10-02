import email from "infra/email.js";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("infra/email.js", () => {
  test("send", async () => {
    await orchestrator.deleteAllEmails();

    await email.send({
      from: "War <war@war.com>",
      to: "gigantossauro@rex.com",
      subject: "Teste de assunto",
      text: "Teste de corpo.",
    });
    await email.send({
      from: "War <war@war.com>",
      to: "gigantossauro@rex.com",
      subject: "Teste de assunto2",
      text: "Teste de corpo2.",
    });

    const lastEmail = await orchestrator.getLastEmail();
    expect(lastEmail.sender).toBe("<war@war.com>");
    expect(lastEmail.recipients[0]).toBe("<gigantossauro@rex.com>");
    expect(lastEmail.subject).toBe("Teste de assunto2");
    expect(lastEmail.text).toBe("Teste de corpo2.\n");
  });
});
