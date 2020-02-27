import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'customPipe'
})

export class CustomTitlePipe implements PipeTransform {
    transform(value: string) {
        const words = value.split(' ');
        const prepositions = ['aboard', 'about', 'above', 'across', 'after', 'against', 'along', 'amid', 'among', 'anti', 'around', 'as', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'besides', 'between', 'beyond', 'but', 'by', 'concerning', 'considering', 'despite', 'down', 'during', 'except', 'excepting', 'excluding', 'following', 'for', 'from', 'in', 'inside', 'into', 'like', 'minus', 'near', 'of', 'off', 'on', 'onto', 'opposite', 'outside', 'over', 'past', 'per', 'plus', 'regarding', 'round', 'save', 'since', 'than', 'through', 'to', 'the', 'toward', 'towards', 'under', 'underneath', 'unlike', 'until', 'up', 'upon', 'versus', 'via', 'with', 'within', 'without'];
        for (let i = 0; i < words.length; i++) {
            if (prepositions.includes(words[i])) {
                words[i] = words[i].toLowerCase();
            } else {
                words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
            }
        }
        return words.join(' ');
    }
}
