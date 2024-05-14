import { CreaturesService } from './creatures.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
export declare class CreaturesController {
    private readonly creaturesService;
    constructor(creaturesService: CreaturesService);
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
    findOne(id: string): string;
    update(id: string, updateCreatureDto: UpdateCreatureDto): string;
    remove(id: string): string;
}
