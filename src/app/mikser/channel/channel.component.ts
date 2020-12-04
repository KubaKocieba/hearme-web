import { Component, Input } from "@angular/core";

type ChannelType = "Aux" | "Bus" | "Track";

@Component({
  selector: "channel",
  templateUrl: "./channel.component.html",
  styleUrls: ["./channel.component.scss"]
})
export class Channel {
  @Input() channelNumber: number;
  @Input() type: ChannelType = "Track";

  constructor() {}
}
