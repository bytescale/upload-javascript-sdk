export class CancelledError extends Error {
  override name: "CancelledError" = "CancelledError";
  constructor(public msg?: string) {
    super(msg);
  }
}
