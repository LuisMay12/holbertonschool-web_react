/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// 5. Advanced types Part 1
// Classes
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
// --- Example checks (optional) ---
var e1 = createEmployee(200);
var e2 = createEmployee(1000);
var e3 = createEmployee('$500');
console.log(e1.constructor.name); // Teacher
console.log(e2.constructor.name); // Director
console.log(e3.constructor.name); // Director

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJCQUEyQjtBQWUzQixVQUFVO0FBQ1Y7SUFBQTtJQVVBLENBQUM7SUFUQywrQkFBWSxHQUFaO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBQ0QsaUNBQWMsR0FBZDtRQUNFLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztJQUNELG9DQUFpQixHQUFqQjtRQUNFLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBRUQ7SUFBQTtJQVVBLENBQUM7SUFUQyw4QkFBWSxHQUFaO1FBQ0UsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsZ0NBQWMsR0FBZDtRQUNFLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUNELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBS0QsU0FBUyxjQUFjLENBQUMsTUFBdUI7SUFDN0MsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUM5QyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7S0FDdEI7SUFDRCxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7QUFDeEIsQ0FBQztBQUVELG9DQUFvQztBQUNwQyxJQUFNLEVBQUUsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsSUFBTSxFQUFFLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLElBQU0sRUFBRSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVO0FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVc7QUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyA1LiBBZHZhbmNlZCB0eXBlcyBQYXJ0IDFcclxuXHJcbi8vIEludGVyZmFjZXNcclxuaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcclxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcclxuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcclxufVxyXG5cclxuLy8gQ2xhc3Nlc1xyXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xyXG4gIH1cclxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJztcclxuICB9XHJcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcyc7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XHJcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ0Nhbm5vdCB3b3JrIGZyb20gaG9tZSc7XHJcbiAgfVxyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnO1xyXG4gIH1cclxuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ0dldHRpbmcgdG8gd29yayc7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGYWN0b3J5XHJcbnR5cGUgRW1wbG95ZWUgPSBEaXJlY3RvciB8IFRlYWNoZXI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IEVtcGxveWVlIHtcclxuICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XHJcbiAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcclxuICB9XHJcbiAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xyXG59XHJcblxyXG4vLyAtLS0gRXhhbXBsZSBjaGVja3MgKG9wdGlvbmFsKSAtLS1cclxuY29uc3QgZTEgPSBjcmVhdGVFbXBsb3llZSgyMDApO1xyXG5jb25zdCBlMiA9IGNyZWF0ZUVtcGxveWVlKDEwMDApO1xyXG5jb25zdCBlMyA9IGNyZWF0ZUVtcGxveWVlKCckNTAwJyk7XHJcblxyXG5jb25zb2xlLmxvZyhlMS5jb25zdHJ1Y3Rvci5uYW1lKTsgLy8gVGVhY2hlclxyXG5jb25zb2xlLmxvZyhlMi5jb25zdHJ1Y3Rvci5uYW1lKTsgLy8gRGlyZWN0b3JcclxuY29uc29sZS5sb2coZTMuY29uc3RydWN0b3IubmFtZSk7IC8vIERpcmVjdG9yXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==