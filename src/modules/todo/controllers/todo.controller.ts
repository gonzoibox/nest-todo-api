import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
//import { Todo } from '../entities/todo.entity';
import { CreateDto, UpdateDto } from './dto';

@Controller('rest/todo')
export class TodoController {

  @Get()
  getAllAction(): string {
    return "GET All Todo";
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): string {
    return "GET One Todo by id=" +id;
  }

  @Post()
  createAction(@Body() todo: CreateDto): CreateDto {
    console.log(todo);
    return todo;
  }

  @Put('id')
  updateAction(
    @Param('id') id: string, 
    @Body() todo: UpdateDto
    ): UpdateDto {
    console.log('Search by id', todo);
    console.log(todo, 'saved');
    return todo;
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): string {
    return "Delete Todo by id=" +id;
  }
}