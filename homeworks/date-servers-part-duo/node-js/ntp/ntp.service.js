export class NtpService {
  getCurrentTimestamp() {
    const date = new Date();
    return date.toISOString();
  }
}
