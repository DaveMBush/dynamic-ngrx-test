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
import { from, Observable, switchMap } from 'rxjs';

import { prismaServiceToken } from '../orm/prisma-service.token';
import { FolderDTO } from './folders-dto.interface';

@Controller('folders')
export class FoldersController {
  constructor(@Inject(prismaServiceToken) private prisma: PrismaClient) {}

  @Post()
  async getByIds(@Body() ids: string[]): Promise<FolderDTO[]> {
    return this.prisma.folders.findMany({
      where: { id: { in: ids } },
      select: {
        id: true,
        name: true,
        version: true,
      },
    });
  }

  @Put()
  update(@Body() folder: FolderDTO): Observable<FolderDTO[]> {
    return from(
      this.prisma.docs.update({
        where: { did: folder.id },
        data: { name: folder.name },
      }),
    ).pipe(switchMap(async () => this.getByIds([folder.id])));
  }

  @Post('add')
  async add(@Body() folder: FolderDTO): Promise<FolderDTO[]> {
    const folderRow = await this.prisma.folders.create({
      data: {
        name: folder.name,
        departmentId: folder.parentId!,
      },
    });
    return this.getByIds([folderRow.id]);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.prisma.folders.delete({ where: { id } });
  }
}
