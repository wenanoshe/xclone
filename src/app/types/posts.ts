import {type Database } from '../types/database'

type PostsEntity = Database['public']['Tables']['posts']['Row']
type UserEntity = Database['public']['Tables']['users']['Row']

export type Posts = PostsEntity & {
    users: UserEntity
}