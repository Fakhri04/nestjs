import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { EmployeeController } from './employe.controller';
import { Employee } from './employee.entity';
import { EmployeeService } from './employe.service';
 
@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}