import { HttpStatus } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Inject, Res } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProdutoDTO, UpdateProdutoDTO } from './produto.dto';
import { Produto } from './produto.entity';
import { ProdutoService } from './produto.service';

@ApiTags('Produtos')
@Controller('/produtos')
export class ProdutoController {
  @Inject(ProdutoService)
  private produtoService: ProdutoService;

  @Get()
  @ApiOkResponse({ description: 'Got All Produtos' })
  async findAll(): Promise<Produto[]> {
    const result = await this.produtoService.findAll();
    return result;
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Got One Produto' })
  @ApiNotFoundResponse({ description: 'Produto Not Found' })
  async readProduto(@Param('id') id: number): Promise<Produto> {
    const result = await this.produtoService.find(id);
    return result;
  }

  @Post()
  @ApiCreatedResponse({ description: 'Created Produto' })
  @ApiBody({ type: CreateProdutoDTO })
  async createProduto(@Body() data: CreateProdutoDTO): Promise<Produto> {
    const result = await this.produtoService.create(data);
    return result;
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Updated Produto' })
  @ApiNotFoundResponse({ description: 'Produto Not Found' })
  @ApiBody({ type: UpdateProdutoDTO })
  async updateProduto(@Param('id') id: number, @Body() data: UpdateProdutoDTO) {
    const result = await this.produtoService.update(id, data);
    return result;
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleted Produto' })
  @ApiNotFoundResponse({ description: 'Produto Not Found' })
  async deleteProduto(@Param('id') id: number) {
    const result = await this.produtoService.delete(id);
    return result;
  }
}
