export class CancelledError extends Error {
  // prettier-ignore
  override name: "CancelledError" = "CancelledError";
  constructor(public msg?: string) {
    super(msg);
  }
}
