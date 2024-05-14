import { PartialType } from '@nestjs/swagger';
import { CreateCreaturaDto } from './create-creatura.dto';

export class UpdateCreaturaDto extends PartialType(CreateCreaturaDto) {}
