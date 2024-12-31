import { UserRepository } from "@/repositories/user-repository";
import { User, Prisma } from "@prisma/client";

export class InMemoryUserRepository implements UserRepository {

    public items: User[] = [];

    async create(data: Prisma.UserCreateInput) {

        const user = {
            id: 'user-1',
            name: data.name,
            email: data.email,
            password_hash: data.password_hash,
            created_at: new Date(),
        };

        this.items.push(user);

        return user;
    }

    async findById(id: string) {
        const user = this.items.find(item => item.id === id);

        if (!user) {
            return null;
        }

        return user;
    }

    async findByEmail(email: string) {
        const user = this.items.find(item => item.email === email);

        if (!user) {
            return null;
        }

        return user;
    }
}