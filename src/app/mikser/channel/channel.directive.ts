import { Directive, TemplateRef } from "@angular/core";
import { MikserComponent } from "../mikser.component";

@Directive({
  selector: "[channelBlueprint]"
})
export class ChannelBlueprintDirective {
  constructor(templateRef: TemplateRef<void>, mikser: MikserComponent) {
    mikser.channelTemplate = templateRef;
  }
}
