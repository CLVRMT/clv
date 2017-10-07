"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../Service/user.service");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var enum_1 = require("../Shared/enum");
var global_1 = require("../Shared/global");
var UserComponent = /** @class */ (function () {
    function UserComponent(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.indLoading = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.userFrm = this.fb.group({
            Id: [''],
            FirstName: ['', forms_1.Validators.required],
            LastName: [''],
            Gender: ['', forms_1.Validators.required]
        });
        this.LoadUsers();
    };
    UserComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT, "TEST")
            .subscribe(function (users) { _this.users = users; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    UserComponent.prototype.addUser = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New User";
        this.modalBtnTitle = "Add";
        this.userFrm.reset();
        this.modal.open();
    };
    UserComponent.prototype.editUser = function (id) {
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit User";
        this.modalBtnTitle = "Update";
        this.user = this.users.filter(function (x) { return x.Id == id; })[0];
        this.userFrm.setValue(this.user);
        this.modal.open();
    };
    UserComponent.prototype.deleteUser = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.user = this.users.filter(function (x) { return x.Id == id; })[0];
        this.userFrm.setValue(this.user);
        this.modal.open();
    };
    UserComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this._userService.post(global_1.Global.BASE_USER_ENDPOINT, 'TEST', formData._value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully added.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.update:
                this._userService.put(global_1.Global.BASE_USER_ENDPOINT, formData._value.Id, "UPDATE", formData._value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully updated.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.delete:
                this._userService.delete(global_1.Global.BASE_USER_ENDPOINT, formData._value.Id, "DELETE").subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully deleted.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
        }
    };
    UserComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], UserComponent.prototype, "modal", void 0);
    UserComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/user.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUE2RDtBQUM3RCx3REFBc0Q7QUFDdEQsd0NBQW9FO0FBQ3BFLDZEQUE2RDtBQUU3RCx1Q0FBNkM7QUFFN0MsMkNBQTBDO0FBTTFDO0lBWUksdUJBQW9CLEVBQWUsRUFBVSxZQUF5QjtRQUFsRCxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFOdEUsZUFBVSxHQUFZLEtBQUssQ0FBQztJQU04QyxDQUFDO0lBRTNFLGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3pCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNSLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZCxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsa0JBQWtCLEVBQUMsTUFBTSxDQUFDO2FBQ2xELFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBTSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNwRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLEdBQVEsS0FB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LENBQUM7Z0JBQ3pCLENBQUMsRUFDRCxVQUFBLEtBQUs7b0JBQ0QsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLENBQUMsQ0FDSixDQUFDO2dCQUNGLEtBQUssQ0FBQztRQUVkLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCLFVBQWlCLFFBQWlCO1FBRTlCLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBL0htQjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBUSw4QkFBYztnREFBQztJQUZqQyxhQUFhO1FBSnpCLGdCQUFTLENBQUM7WUFDUCxXQUFXLEVBQUUsb0NBQW9DO1NBQ3BELENBQUM7eUNBYzBCLG1CQUFXLEVBQXdCLDBCQUFXO09BWjdELGFBQWEsQ0FrSXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWxJRCxJQWtJQztBQWxJWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsJztcclxuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICcuLi9Nb2RlbC91c2VyJztcclxuaW1wb3J0IHsgREJPcGVyYXRpb24gfSBmcm9tICcuLi9TaGFyZWQvZW51bSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi4vU2hhcmVkL2dsb2JhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL0NvbXBvbmVudHMvdXNlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdtb2RhbCcpIG1vZGFsOiBNb2RhbENvbXBvbmVudDtcclxuICAgIHVzZXJzOiBJVXNlcltdO1xyXG4gICAgdXNlcjogSVVzZXI7XHJcbiAgICBtc2c6IHN0cmluZztcclxuICAgIGluZExvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHVzZXJGcm06IEZvcm1Hcm91cDtcclxuICAgIGRib3BzOiBEQk9wZXJhdGlvbjtcclxuICAgIG1vZGFsVGl0bGU6IHN0cmluZztcclxuICAgIG1vZGFsQnRuVGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVzZXJGcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgSWQ6IFsnJ10sXHJcbiAgICAgICAgICAgIEZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgTGFzdE5hbWU6IFsnJ10sXHJcbiAgICAgICAgICAgIEdlbmRlcjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuTG9hZFVzZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgTG9hZFVzZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5kTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZ2V0KEdsb2JhbC5CQVNFX1VTRVJfRU5EUE9JTlQsXCJURVNUXCIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodXNlcnMgPT4geyB0aGlzLnVzZXJzID0gdXNlcnM7IHRoaXMuaW5kTG9hZGluZyA9IGZhbHNlOyB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLm1zZyA9IDxhbnk+ZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVzZXIoKSB7XHJcbiAgICAgICAgdGhpcy5kYm9wcyA9IERCT3BlcmF0aW9uLmNyZWF0ZTtcclxuICAgICAgICB0aGlzLlNldENvbnRyb2xzU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gXCJBZGQgTmV3IFVzZXJcIjtcclxuICAgICAgICB0aGlzLm1vZGFsQnRuVGl0bGUgPSBcIkFkZFwiO1xyXG4gICAgICAgIHRoaXMudXNlckZybS5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMubW9kYWwub3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRVc2VyKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRib3BzID0gREJPcGVyYXRpb24udXBkYXRlO1xyXG4gICAgICAgIHRoaXMuU2V0Q29udHJvbHNTdGF0ZSh0cnVlKTtcclxuICAgICAgICB0aGlzLm1vZGFsVGl0bGUgPSBcIkVkaXQgVXNlclwiO1xyXG4gICAgICAgIHRoaXMubW9kYWxCdG5UaXRsZSA9IFwiVXBkYXRlXCI7XHJcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy51c2Vycy5maWx0ZXIoeCA9PiB4LklkID09IGlkKVswXTtcclxuICAgICAgICB0aGlzLnVzZXJGcm0uc2V0VmFsdWUodGhpcy51c2VyKTtcclxuICAgICAgICB0aGlzLm1vZGFsLm9wZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVVc2VyKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRib3BzID0gREJPcGVyYXRpb24uZGVsZXRlO1xyXG4gICAgICAgIHRoaXMuU2V0Q29udHJvbHNTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gXCJDb25maXJtIHRvIERlbGV0ZT9cIjtcclxuICAgICAgICB0aGlzLm1vZGFsQnRuVGl0bGUgPSBcIkRlbGV0ZVwiO1xyXG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMudXNlcnMuZmlsdGVyKHggPT4geC5JZCA9PSBpZClbMF07XHJcbiAgICAgICAgdGhpcy51c2VyRnJtLnNldFZhbHVlKHRoaXMudXNlcik7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZm9ybURhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMubXNnID0gXCJcIjtcclxuICAgXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmRib3BzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgREJPcGVyYXRpb24uY3JlYXRlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UucG9zdChHbG9iYWwuQkFTRV9VU0VSX0VORFBPSU5ULCdURVNUJywgZm9ybURhdGEuX3ZhbHVlKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhID09IDEpIC8vU3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1zZyA9IFwiRGF0YSBzdWNjZXNzZnVsbHkgYWRkZWQuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkxvYWRVc2VycygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tc2cgPSBcIlRoZXJlIGlzIHNvbWUgaXNzdWUgaW4gc2F2aW5nIHJlY29yZHMsIHBsZWFzZSBjb250YWN0IHRvIHN5c3RlbSBhZG1pbmlzdHJhdG9yIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kYWwuZGlzbWlzcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5tc2cgPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgREJPcGVyYXRpb24udXBkYXRlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UucHV0KEdsb2JhbC5CQVNFX1VTRVJfRU5EUE9JTlQsIGZvcm1EYXRhLl92YWx1ZS5JZCwgXCJVUERBVEVcIiwgZm9ybURhdGEuX3ZhbHVlKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhID09IDEpIC8vU3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1zZyA9IFwiRGF0YSBzdWNjZXNzZnVsbHkgdXBkYXRlZC5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTG9hZFVzZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1zZyA9IFwiVGhlcmUgaXMgc29tZSBpc3N1ZSBpbiBzYXZpbmcgcmVjb3JkcywgcGxlYXNlIGNvbnRhY3QgdG8gc3lzdGVtIGFkbWluaXN0cmF0b3IhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbC5kaXNtaXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXNnID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERCT3BlcmF0aW9uLmRlbGV0ZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmRlbGV0ZShHbG9iYWwuQkFTRV9VU0VSX0VORFBPSU5ULCBmb3JtRGF0YS5fdmFsdWUuSWQsIFwiREVMRVRFXCIpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgPT0gMSkgLy9TdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXNnID0gXCJEYXRhIHN1Y2Nlc3NmdWxseSBkZWxldGVkLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Mb2FkVXNlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXNnID0gXCJUaGVyZSBpcyBzb21lIGlzc3VlIGluIHNhdmluZyByZWNvcmRzLCBwbGVhc2UgY29udGFjdCB0byBzeXN0ZW0gYWRtaW5pc3RyYXRvciFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLmRpc21pc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tc2cgPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBTZXRDb250cm9sc1N0YXRlKGlzRW5hYmxlOiBib29sZWFuKVxyXG4gICAge1xyXG4gICAgICAgIGlzRW5hYmxlID8gdGhpcy51c2VyRnJtLmVuYWJsZSgpIDogdGhpcy51c2VyRnJtLmRpc2FibGUoKTtcclxuICAgIH1cclxufSJdfQ==