import { createRouter } from "next-connect";
import controller from "infra/controller";
import user from "models/user";
import session from "models/session";

const router = createRouter();

router.get(getHandler);

export default router.handler(controller.errorHandlers);

async function getHandler(request, response) {
  const sessionToken = request.cookies.session_id;

  const sessionObject = await session.findOneValidByToken(sessionToken);
  await session.renew(sessionObject.id);
  controller.setSessionCookie(sessionObject.token, response);
  response.setHeader("Cache-Control", "no-store, max-age=0, must-revalidate");

  const userFound = await user.findOneById(sessionObject.user_id);
  return response.status(200).json(userFound);
}
