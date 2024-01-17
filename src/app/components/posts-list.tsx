import PostCard from './post-card'
import {type Posts} from '../types/posts'

export function PostsList ({ posts }: { posts: Posts[]}) {
    return (
        posts?.map(post => (
            <PostCard 
                key={post.id} 
                userName={post.users.user_name} 
                userFullName={post.users.name} 
                avatarUrl={post.users.avatar_url}
                content={post.content}
            />
        ))
    )
}