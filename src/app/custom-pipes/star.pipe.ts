import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'star'
})
export class StarPipe implements PipeTransform {
    transform(value: number) {
        if (!(value <= 5)) { return null; }
        let row = ``;
        for (let i = 0; i < value; i++) {
            row += `<i class="fas fa-star ratings"></i>`;
        }
        console.log(row);
        return row;
    }
}
