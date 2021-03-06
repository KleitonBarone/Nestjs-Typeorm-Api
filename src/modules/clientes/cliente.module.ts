import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { clienteProviders } from './cliente.providers';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...clienteProviders, ClienteService],
  controllers: [ClienteController],
})
export class ClienteModule {}
