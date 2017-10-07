"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "user-app",
            template: "\n                <div>\n                    <nav class='navbar navbar-inverse'>\n                        <div class='container-fluid'>\n                            <ul class='nav navbar-nav'>\n                                <li><a [routerLink]=\"['home']\">Home</a></li>\n                                <li><a [routerLink]=\"['user']\">Users Management</a></li>\n                            </ul>\n                        </div>\n                    </nav>\n                    <div class='container'>\n                        <router-outlet></router-outlet>\n                    </div>\n                 </div>\n                "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFxQnpDO0lBQUE7SUFFQSxDQUFDO0lBRlksWUFBWTtRQW5CeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSwwbkJBY0c7U0FDaEIsQ0FBQztPQUVXLFlBQVksQ0FFeEI7SUFBRCxtQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ1c2VyLWFwcFwiLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ2hvbWUnXVwiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWyd1c2VyJ11cIj5Vc2VycyBNYW5hZ2VtZW50PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbn0iXX0=