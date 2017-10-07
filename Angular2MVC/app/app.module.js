"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var user_component_1 = require("./components/user.component");
var home_component_1 = require("./components/home.component");
var user_service_1 = require("./Service/user.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing, ng2_bs3_modal_1.Ng2Bs3ModalModule],
            declarations: [app_component_1.AppComponent, user_component_1.UserComponent, home_component_1.HomeComponent],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQWdEO0FBQ2hELDhEQUEwRDtBQUMxRCx3Q0FBcUQ7QUFDckQsaURBQStDO0FBQy9DLDZEQUFnRTtBQUNoRSxzQ0FBMkM7QUFDM0MsNkNBQXdDO0FBQ3hDLDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsdURBQW1EO0FBU25EO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFQckIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsZ0NBQWEsRUFBRSwyQkFBbUIsRUFBRSxpQkFBVSxFQUFFLHFCQUFPLEVBQUUsaUNBQWlCLENBQUM7WUFDckYsWUFBWSxFQUFFLENBQUMsNEJBQVksRUFBRSw4QkFBYSxFQUFFLDhCQUFhLENBQUM7WUFDMUQsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsc0JBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsMEJBQVcsQ0FBQztZQUNuRSxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRTVCLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZzJCczNNb2RhbE1vZHVsZSB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgcm91dGluZyB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyBVc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlfSBmcm9tICcuL1NlcnZpY2UvdXNlci5zZXJ2aWNlJ1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBIdHRwTW9kdWxlLCByb3V0aW5nLCBOZzJCczNNb2RhbE1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIFVzZXJDb21wb25lbnQsIEhvbWVDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLCB1c2VWYWx1ZTogJy8nIH0sIFVzZXJTZXJ2aWNlXSxcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==