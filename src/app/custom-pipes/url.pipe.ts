import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'url'
})
export class UrlPipe implements PipeTransform {
    transform(value: string) {
        if (!value) { return null; }
        return value.toLowerCase().split(' ').join('-');
    }
}
