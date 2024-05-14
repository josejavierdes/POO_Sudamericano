import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CreaturesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCreatureDto: CreateCreatureDto): string;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        lastSee: string;
        countLastSee: number;
        extinct: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateCreatureDto: UpdateCreatureDto): string;
    remove(id: number): string;
}
