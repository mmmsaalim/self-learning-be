import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}
  create(createPersonDto: CreatePersonDto) {
     const newPerson = this.personRepository.create(createPersonDto);
    return this.personRepository.save(newPerson);
  }

async  findAll(page: number, size: number): Promise<{data:Person[]; total: number}> {
    const [data,  total] = await this.personRepository.findAndCount({
      order: {
        id: 'DESC',
      },
      skip:page*size,
      take: size,
    });
    return {data, total}
  }

 async findOne(id: number): Promise<Person> {
  const person = await this.personRepository.findOne({ where: { id } });

  if (!person) {
    throw new NotFoundException(`Person with ID ${id} not found`);
  }

  return person;
}

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
