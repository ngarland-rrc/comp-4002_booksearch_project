import { CommentRepository } from "../repositories/CommentRepository";
import type { CreateCommentInput } from "../schemas/comment.schema";

export class CommentService {
    constructor(private readonly repo = new CommentRepository()) {}
    
    async getAll () {
        return this.repo.findAll();
    }

    async create(input: CreateCommentInput) {
        // Business rules would go here
        // but since my comment schema is really basic, there is no need
        return this.repo.create({ text: input.text });
    }

    async delete (id: number) {
        return this.repo.delete(id);
    }
}