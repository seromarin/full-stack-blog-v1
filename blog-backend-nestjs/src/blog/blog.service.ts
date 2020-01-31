import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interfaces';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class BlogService {}
