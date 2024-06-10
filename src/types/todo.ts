export type Todo = {
    id: string,
    title: string,
    createdAt: Date,
    status: Status
}

export type Status = 'done' | 'open'