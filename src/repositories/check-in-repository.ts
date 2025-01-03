import { Checkin, Prisma } from '@prisma/client';

export interface CheckinRepository {
    create(data: Prisma.CheckinUncheckedCreateInput): Promise<Checkin>;
}