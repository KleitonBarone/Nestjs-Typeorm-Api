import { HttpStatus } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Inject, Res } from '@nestjs/common';
import { PedidoDTO } from './pedido.dto';
import { Pedido } from './pedido.entity';
import { PedidoService } from './pedido.service';

@Controller('/pedidos')
export class PedidoController {
  @Inject(PedidoService)
  private pedidoService: PedidoService;

  @Get()
  async findAll(): Promise<Pedido[]> {
    const result = await this.pedidoService.findAll();
    return result;
  }

  @Get(':id')
  async readPedido(@Param('id') id: number): Promise<Pedido> {
    const result = await this.pedidoService.find(id);
    return result;
  }

  @Post()
  async createPedido(@Body() data: PedidoDTO): Promise<Pedido> {
    const result = await this.pedidoService.create(data);
    return result;
  }

  @Put(':id')
  async updatePedido(
    @Param('id') id: number,
    @Body() data: Partial<PedidoDTO>,
  ) {
    const result = await this.pedidoService.update(id, data);
    return result;
  }

  @Delete(':id')
  async deletePedido(@Param('id') id: number) {
    const result = await this.pedidoService.delete(id);
    return result;
  }
}