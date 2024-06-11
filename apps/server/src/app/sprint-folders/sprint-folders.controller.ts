import {
  Body,
  Controller,
  Delete,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { from, Observable, switchMap, tap } from 'rxjs';

import { prismaServiceToken } from '../orm/prisma-service.token';
import { SprintFolderDTO } from './sprint-folders-dto.interface';
import { SocketGateway } from '../socket/socket.gateway';

@Controller('sprintFolders')
export class SprintFoldersController {
  constructor(
    @Inject(prismaServiceToken) private prisma: PrismaClient,
    private gateway: SocketGateway
) { }

  @Post()
  async getByIds(@Body() ids: string[]): Promise<SprintFolderDTO[]> {
    return this.prisma.sprintFolders.findMany({
      where: { id: { in: ids } },
      select: {
        id: true,
        name: true,
        version: true,
      },
    });
  }

  @Put()
  update(@Body() sprintFolder: SprintFolderDTO): Observable<SprintFolderDTO[]> {
    return from(
      this.prisma.sprintFolders.update({
        where: { id: sprintFolder.id },
        data: { name: sprintFolder.name },
      }),
    ).pipe(
      switchMap(async () => this.getByIds([sprintFolder.id])),
      tap(() => this.gateway.sendNotification({ ids: [sprintFolder.id], action: 'update', table: 'sprintFolders' })),
    );
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.prisma.sprintFolders.delete({ where: { id } });
  }

  @Post('add')
  async add(@Body() sprintFolder: SprintFolderDTO): Promise<SprintFolderDTO[]> {
    const result = await this.prisma.lists.create({
      data: {
        name: sprintFolder.name,
        departmentId: sprintFolder.parentId!,
      },
    });
    return this.getByIds([result.id]);
  }
}
