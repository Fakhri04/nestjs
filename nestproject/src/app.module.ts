import { EmployeeModule } from './Employe/employe.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './Employe/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5433,
    username: 'postgres',
    password: 'secret',
    database: 'employee',
    entities: [Employee],
  })
  ,EmployeeModule,

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
