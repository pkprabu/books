import { ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('An unexpected error occured. Please look at the console.');
        console.log(error);
    }
}
