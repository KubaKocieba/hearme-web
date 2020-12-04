import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MikserComponent } from "./mikser/mikser.component";
import { Channel } from "./mikser/channel/channel.component";
import { ChannelBlueprintDirective } from "./mikser/channel/channel.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MikserComponent,
    Channel,
    ChannelBlueprintDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
