export type Todo = {
    id: string,
    title: string,
    createdAt: Date,
    status: Status,
    asignee: string
}

export type Status = 'done' | 'open'