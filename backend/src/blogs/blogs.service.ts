import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';


@Injectable()
export class BlogsService {

  constructor(
    @InjectRepository(Blog)
    private blogsRepository: Repository<Blog>,
  ){}

  async create(createBlogDto: CreateBlogDto) {
    return await this.blogsRepository.save(createBlogDto);
  }

  findAll() {
     return this.blogsRepository.find();
  }

  findOne(id: number) {
     return this.blogsRepository.findOneBy({ id });
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {

     updateBlogDto.id = id;
     return this.blogsRepository.save(updateBlogDto);
  }

  async remove(id: number): Promise<void> {
    await this.blogsRepository.delete(id);
  }
}
