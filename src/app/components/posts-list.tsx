import PostCard from './post-card'

export function PostsList ( {posts}) {
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