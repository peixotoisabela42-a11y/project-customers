import { Body, Controller, Delete, Get, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { UpsertCustomerDTO } from './dto/Upsert-customer.dto';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Get('/')
    findAll() {
        return this.customersService.findAll();
    }

    @Post('/')
    create(@Body() emailbody: UpsertCustomerDTO) {
        return this.customersService.create(emailbody);
    }
    @Put(':id')
    update(
    @Param('id', ParseIntPipe ) id: number,
    @Body() emailDto: UpsertCustomerDTO,) {
        return this.customersService.update(id, emailDto);
    }

    @Delete('/')
    removeAll() {
        return this.customersService.removeAll();

    }
}
 