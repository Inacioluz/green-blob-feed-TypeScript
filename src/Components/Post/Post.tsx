import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Avatar.js'
import { Comment } from '../Comment/Comment.js'
import styles from './Post.module.css'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}
interface Content {
    type:'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps){

    const [comments, setComments] = useState([
     'Opa, seu comentário é muito legal meu brother!!!!!'
    ])

    const [ newCommentText, setNewCommentText ] = useState('')

    console.log(newCommentText)

    const publishedDateFormatted =  format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handCreateNewComment(event: FormEvent) {
      event.preventDefault()

      setComments ([...comments, newCommentText]);
      setNewCommentText('');
       
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function newCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentsToDelete: string) {
        
        const commentsWithoutDeletedOne = comments.filter(comments => {
            return comments != commentsToDelete;
        })
        
        setComments(commentsWithoutDeletedOne);

    }
    const isNewCommentEmpty = newCommentText.length === 0;

    return (
       
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
            {post.content.map(line => {
                if (line.type === 'paragraph') {
                return <p key={line.content}>{line.content}</p>;
                } else if ( line.type === 'link') {
                    return <p key={line.content}><a href="#">{line.content}</a></p>;
                }
            })}
            </div>
            <form onSubmit={handCreateNewComment} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                name="comments"
                placeholder="Deixe um comentário"
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={newCommentInvalid}
                required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                        </button>
                </footer>
            </form>
            
                <div className={styles.commentList}>
                {comments.map(comments => {
                    return ( 
                    <Comment 
                    key={comments} 
                    content={comments} 
                    onDeleteComment={deleteComment} 
                    />
                    )
                })}
                </div>

        </article>
    )
}