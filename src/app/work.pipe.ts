import { Pipe, PipeTransform } from '@angular/core';
import { WorkEnum } from './enum.helper';

@Pipe({ name: 'work' })
export class WorkPipe implements PipeTransform
{
  transform(value: WorkEnum): string
  {
    switch (value)
    {
      case WorkEnum.waite: return 'Ожидание';
      case WorkEnum.work: return 'Действие в обработке';
      case WorkEnum.complete: return 'Действие завершено';
      case WorkEnum.starting: return 'Начало действия';
      default: return `Не создано преобразование для ${value}`;
    }
  }

}
