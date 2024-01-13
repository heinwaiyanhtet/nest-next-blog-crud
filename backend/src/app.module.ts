import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BlogsModule } from './blogs/blogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blogs/entities/blog.entity';

@Module({
  imports: [ 
    DatabaseModule, 
    BlogsModule,
    // TypeOrmModule.forFeature([Blog]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
