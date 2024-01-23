import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {    
    try
    {
        return this.blogsService.create(createBlogDto);
    } 
    catch (ex) {
        throw new Error(`Catch error : ${ex.message}`);
    }
  }

  @Get()
  findAll() {
      try 
      {
          return this.blogsService.findAll();
      } catch (ex) {
          throw new Error(`create error: ${ex.message}.`);
      }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {

    try {
        return this.blogsService.findOne(+id);
    } catch (ex) {
        throw new Error(`create error: ${ex.message}.`);
    }
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    if (!id)
          throw new Error(`update error: id is empty.`);
      try {
        return this.blogsService.update(+id, updateBlogDto);
      
      } catch (ex) {
          throw new Error(`create error: ${ex.message}.`);
      }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
        if (!id)
          throw new Error(`delete error: id is empty.`);

        return this.blogsService.remove(+id);
    }
     catch (ex) {
         throw new Error(`create error: ${ex.message}.`);
    }
  }

}
