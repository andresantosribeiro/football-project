import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { SharedModule } from "src/shared/shared.module";

@NgModule({
    declarations:[
        LoginComponent
    ],
    imports: [
        SharedModule
    ],
    providers:[],
    bootstrap: [LoginComponent],
    exports: [
        LoginComponent
    ],
})
export class LoginModule{}