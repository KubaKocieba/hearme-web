import { Component, Input, OnInit, TemplateRef } from "@angular/core";
import { Channel } from "./channel/channel.component";

abstract class Mikser {
  channelTemplate: TemplateRef<any>;
}

@Component({
  selector: "mikser",
  templateUrl: "./mikser.component.html",
  styleUrls: ["./mikser.component.scss"]
})
export class MikserComponent extends Mikser implements OnInit {
  @Input() channelAmount: number;
  @Input() mikserLabel: string;
  channels: Array<number>;

  ngOnInit() {
    this.channels = new Array(this.channelAmount);
  }
}
