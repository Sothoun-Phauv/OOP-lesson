import { Room } from "./Room";

export class MeetingRoom extends Room {
  private canHaveVideoCall: boolean;

  constructor(name: string, canHaveVideoCall: boolean) {
    super(name);
    this.canHaveVideoCall = canHaveVideoCall;
  }
  // getName(): string {
  //   return this.name
  // }
}
