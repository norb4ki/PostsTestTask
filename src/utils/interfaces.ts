export interface PostData {
    userId: number,
    id: number,
    title: string,
    body: string
}
export interface LoaderData {
    posts: PostData[];
}