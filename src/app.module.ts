import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person2/person.module';
import { Person } from './person2/entities/person.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',   
      database: 'users1',
      entities: [Person], 
    }),
    PersonModule,
  ],
})
export class AppModule {}
