export class InternalServerError extends Error {
  constructor({ cause, statusCode }) {
    super("Erro interno não esperado", {
      cause,
    });

    this.name = "InternalServerError";
    this.action = "Entre em contato com o suporte";
    this.statusCode = statusCode || 500;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}

export class MethodNotAllowedError extends Error {
  constructor() {
    super("Método não permitido para esse endpoint");
    this.name = "MethodNotAllowedError";
    this.action = "Verifique a documentação da API";
    this.statusCode = 405;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}

export class ServiceError extends Error {
  constructor({ cause, message }) {
    super(message || "Serviço indisponível", {
      cause,
    });
    this.name = "ServiceError";
    this.action = "Verifique disponibilidade do serviço";
    this.statusCode = 503;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}

export class ValidationError extends Error {
  constructor({ cause, message, action }) {
    super(message || "Um erro de validação ocorreu", {
      cause,
    });
    this.name = "ValidationError";
    this.action = action || "Ajuste os dados enviados";
    this.statusCode = 400;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}

export class NotFoundError extends Error {
  constructor({ cause, message, action }) {
    super(message || "Não foi possível encontrar esse recurso no sistema", {
      cause,
    });
    this.name = "NotFoundError";
    this.action = action || "Verifique os parâmetros da consulta";
    this.statusCode = 404;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
