import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: 'title';
  @IsNotEmpty()
  description: 'description';
}
